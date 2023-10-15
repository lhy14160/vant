import{_ as t}from"./locales-be796722.js";import{o as s,a,z as n}from"./vue-libs-19c20d28.js";const d={},e={class:"van-doc-markdown-body"},l=n(`<h1>SubmitBar</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to display the order amount and submit the order.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">SubmitBar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SubmitBar</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-submit-bar</span> <span class="hljs-attr">:price</span>=<span class="hljs-string">&quot;3050&quot;</span> <span class="hljs-attr">button-text</span>=<span class="hljs-string">&quot;Submit&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSubmit</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;Submit&#39;</span>);
    <span class="hljs-keyword">return</span> {
      onSubmit,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3><p><code>submit</code> event will not triggered when disabled.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-submit-bar</span>
  <span class="hljs-attr">disabled</span>
  <span class="hljs-attr">:price</span>=<span class="hljs-string">&quot;3050&quot;</span>
  <span class="hljs-attr">button-text</span>=<span class="hljs-string">&quot;Submit&quot;</span>
  <span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;Some tips&quot;</span>
  <span class="hljs-attr">tip-icon</span>=<span class="hljs-string">&quot;info-o&quot;</span>
  @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="loading" tabindex="-1">Loading</h3><p><code>submit</code> event will not triggered when loading.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-submit-bar</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">:price</span>=<span class="hljs-string">&quot;3050&quot;</span> <span class="hljs-attr">button-text</span>=<span class="hljs-string">&quot;Submit&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="advanced-usage" tabindex="-1">Advanced Usage</h3><p>Use slot to add custom contents.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-submit-bar</span> <span class="hljs-attr">:price</span>=<span class="hljs-string">&quot;3050&quot;</span> <span class="hljs-attr">button-text</span>=<span class="hljs-string">&quot;Submit&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>Check<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tip</span>&gt;</span> Some tips, <span class="hljs-tag">&lt;<span class="hljs-name">span</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickLink&quot;</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-submit-bar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSubmit</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;Submit&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickLink</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;Click Link&#39;</span>);
    <span class="hljs-keyword">return</span> {
      onSubmit,
      onClickLink,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>price</td><td>Price</td><td><em>number</em></td><td>-</td></tr><tr><td>decimal-length</td><td>Price decimal length</td><td><em>number | string</em></td><td><code>2</code></td></tr><tr><td>label</td><td>Price left label</td><td><em>string</em></td><td><code>Total: </code></td></tr><tr><td>suffix-label</td><td>Price right label</td><td><em>string</em></td><td>-</td></tr><tr><td>text-align</td><td>Price label text align can be set to <code>left</code></td><td><em>string</em></td><td><code>right</code></td></tr><tr><td>button-text</td><td>Button text</td><td><em>string</em></td><td>-</td></tr><tr><td>button-type</td><td>Button type</td><td><em>string</em></td><td><code>danger</code></td></tr><tr><td>button-color</td><td>Button color</td><td><em>string</em></td><td>-</td></tr><tr><td>tip</td><td>Tip</td><td><em>string</em></td><td>-</td></tr><tr><td>tip-icon</td><td>Tip left icon</td><td><em>string</em></td><td>-</td></tr><tr><td>currency</td><td>Currency symbol</td><td><em>string</em></td><td><code>¥</code></td></tr><tr><td>disabled</td><td>Whether to disable button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loading</td><td>Whether to show loading icon</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>safe-area-inset-bottom</td><td>Whether to enable bottom safe area adaptation</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>placeholder</td><td>Whether to generate a placeholder element</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>submit</td><td>Triggered when click submit button</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Custom left content</td></tr><tr><td>button</td><td>Custom button</td></tr><tr><td>top</td><td>Custom top content</td></tr><tr><td>tip</td><td>Custom tips</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SubmitBarProps</span>, <span class="hljs-title class_">SubmitBarTextAlign</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-submit-bar-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-submit-bar-z-index</td><td><em>100</em></td><td>-</td></tr><tr><td>--van-submit-bar-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-submit-bar-button-width</td><td><em>110px</em></td><td>-</td></tr><tr><td>--van-submit-bar-price-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-submit-bar-price-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-submit-bar-price-integer-font-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-submit-bar-price-font</td><td><em>var(--van-price-font)</em></td><td>-</td></tr><tr><td>--van-submit-bar-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-submit-bar-text-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-submit-bar-tip-padding</td><td><em>var(--van-padding-xs) var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-submit-bar-tip-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-submit-bar-tip-line-height</td><td><em>1.5</em></td><td>-</td></tr><tr><td>--van-submit-bar-tip-color</td><td><em>var(--van-orange-dark)</em></td><td>-</td></tr><tr><td>--van-submit-bar-tip-background</td><td><em>var(--van-orange-light)</em></td><td>-</td></tr><tr><td>--van-submit-bar-tip-icon-size</td><td><em>12px</em></td><td>-</td></tr><tr><td>--van-submit-bar-button-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-submit-bar-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr></tbody></table></div>`,15),r=[l];function p(o,i){return s(),a("div",e,r)}const m=t(d,[["render",p]]);export{m as default};
