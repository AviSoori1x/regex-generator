package org.olafneumann.regex.generator.output

import org.olafneumann.regex.generator.regex.Options

abstract class SimpleReplacingCodeGenerator(
    override val languageName: String,
    override val highlightLanguage: String,
    private val templateCode: String
) : CodeGenerator {
    protected open fun transformPattern(pattern: String, options: Options): String = pattern

    protected abstract fun generateOptionsCode(options: Options): String

    protected open fun getWarnings(pattern: String, options: Options): List<String> = emptyList()

    override fun generateCode(pattern: String, options: Options): CodeGenerator.GeneratedSnippet =
        CodeGenerator.GeneratedSnippet(
            templateCode.replace("%1${'$'}s", transformPattern(pattern, options))
                .replace("%2${'$'}s", generateOptionsCode(options))
                .replace("%3${'$'}s", pattern),
            getWarnings(pattern, options)
        )

    @Suppress("LongParameterList")
    protected fun Options.combine(
        valueForCaseInsensitive: String? = null,
        valueForMultiline: String? = null,
        valueForDotAll: String? = null,
        prefix: String = "",
        separator: String = "",
        postfix: String = ""
    ): String {
        val optionList = mutableListOf<String>()
        if (caseInsensitive && valueForCaseInsensitive != null)
            optionList += valueForCaseInsensitive
        if (dotMatchesLineBreaks && valueForDotAll != null)
            optionList += valueForDotAll
        if (multiline && valueForMultiline != null)
            optionList += valueForMultiline

        return if (optionList.isNotEmpty()) {
            optionList.joinToString(separator = separator, prefix = prefix, postfix = postfix)
        } else {
            ""
        }
    }
}
