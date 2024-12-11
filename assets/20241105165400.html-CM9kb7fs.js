import{_ as s,c as a,e,o as n}from"./app-BT9-joFq.js";const l={};function t(h,i){return n(),a("div",null,i[0]||(i[0]=[e(`<p><strong>原文链接：</strong> <a href="https://mp.weixin.qq.com/s/EvN_lUyiQnlHR9kJ5SiosA" target="_blank" rel="noopener noreferrer">Git Commit Message 应该怎么写？</a></p><p>最近被同事吐槽了，说我代码提交说明写的太差。其实都不用他吐槽，我自己心里也非常清楚。毕竟很多时候犯懒，都是直接一个 <code>-m &quot;fix&quot;</code> 就提交上去了。</p><p>这样做是非常不好的，我也是自食恶果，深受其害。特别是查看历史提交记录时，想通过提交说明来了解当时的功能变更，基本不可能，都得点进去看代码才行。</p><p>所以这两天看了一些<strong>如何写好提交说明</strong>的资料，系统地学习了一下。虽然团队没有这方面的要求，但是想要进步，得对自己提更高的要求才行。</p><p>一般使用 git 提交代码的话，可以使用 <code>-m</code> 参数来指定提交说明，比如：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;hello world&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果一行不够，可以只执行 <code>git commit</code>，这样就会跳出文本编辑器来写多行：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="commit-message-格式" tabindex="-1"><a class="header-anchor" href="#commit-message-格式"><span>Commit Message 格式</span></a></h2><p>Commit Message 包括三个部分：Header，Body 和 Footer。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;Header&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;Body&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;Footer&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，Header 是必需的，Body 和 Footer 可以省略。</p><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header"><span>Header</span></a></h3><p>Header 部分只有一行，包括三个字段：type（必需）、scope（可选）、subject（必需）。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&gt;(</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">scope</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: &lt;subject&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h4><p>type 用于说明 commit 的类别，具体的标识如下：</p><ul><li><code>feat</code>：一个新的功能（feature）；</li><li><code>fix</code>：修复 bug;</li><li><code>docs</code>：修改文档，比如 README.md、CHANGELOG.md 等；</li><li><code>style</code>：修改代码的格式，不影响代码运行的变动，比如空格、格式化代码、补齐句末分号等等；</li><li><code>refactor</code>：代码重构，没有新功能的添加以及 bug 修复的代码改动；</li><li><code>perf</code>：优化代码以提高性能；</li><li><code>test</code>：增加测试或优化改善现有的测试；</li><li><code>build</code>：修改影响项目构建文件或外部依赖项，比如 npm、gulp、webpack、broccoli 等；</li><li><code>ci</code>：修改 CI 配置文件和脚本；</li><li><code>chore</code>：其他非 src 路径文件和测试文件的修改，比如 .gitignore、.editorconfig 等；</li><li><code>revert</code>：代码回退；</li></ul><h4 id="scope" tabindex="-1"><a class="header-anchor" href="#scope"><span>scope</span></a></h4><p>scope 用于说明 commit 的影响范围，比如数据层、控制层、视图层等等，视项目不同而不同。</p><p>如果你的修改影响了不止一个 scope，就可以使用 <code>*</code> 代替。</p><h4 id="subject" tabindex="-1"><a class="header-anchor" href="#subject"><span>subject</span></a></h4><p>subject 是 commit 目的的简单描述，不超过 50 个字符，结尾不需要句号。</p><h3 id="body" tabindex="-1"><a class="header-anchor" href="#body"><span>Body</span></a></h3><p>Body 部分是对本次 commit 的详细描述，可以分多行。</p><p>Body 部分应该说明代码变动的动机，以及与以前行为的对比。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">More</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> detailed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> explanatory</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> text,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> if</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> necessary.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Wrap</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">about</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 72</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> characters</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> so.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Further</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> paragraphs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> come</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> after</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> blank</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lines.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Bullet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> points</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> are</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> okay,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> too</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hanging</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> indent</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer"><span>Footer</span></a></h3><p>Footer 部分主要用于两种情况：不兼容变动和处理 Issue。</p><h4 id="不兼容变动" tabindex="-1"><a class="header-anchor" href="#不兼容变动"><span>不兼容变动</span></a></h4><p>如果当前代码与上一个版本不兼容，则 Footer 部分以 <code>BREAKING CHANGE:</code> 开头，后面就是对变动的描述、以及变动理由和迁移方法。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">BREAKING</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CHANGE:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Previously,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $compileProvider</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.preAssignBindingsEnabled</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> was</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> default.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> This</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> means</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bindings</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> were</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pre-assigned</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> component</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> constructors.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> In</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Angular</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1.5+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> place</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> put</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> initialization</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> relying</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bindings</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> being</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> present</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> controller</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $onInit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> method.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">To</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> migrate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> follow</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> example</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> below:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Before:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">​</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`\`\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">js</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">angular.module(&#39;myApp&#39;,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> [])</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    .component(&#39;myComponent&#39;,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        bindings:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {value: &#39;&lt;&#39;},</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        controller:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> function() {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        this.doubleValue</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> = this.value </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">});</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">​</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">After:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">​</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`\`\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">js</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">angular.module(&#39;myApp&#39;,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> [])</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    .component(&#39;myComponent&#39;,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        bindings:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {value: &#39;&lt;&#39;},</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        controller:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> function() {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            this.$onInit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> = function() {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">                this.doubleValue</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> = this.value </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            };</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        };</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        this.doubleValue</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> = this.value </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">});</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">​</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Don</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;t do this if you&#39;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">re</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> writing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> library,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> though,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> as</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> you</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> shouldn&#39;t change global configuration then.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="处理-issue" tabindex="-1"><a class="header-anchor" href="#处理-issue"><span>处理 Issue</span></a></h4><p>处理 Issue 分为两种情况，分别是关联 Issue 和关闭 Issue。</p><p>比如本次提交如果和某个 issue 有关系：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Issue</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> #1, #2, #3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果当前提交信息解决了某个 issue：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Close</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> #1, #2, #3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="revert" tabindex="-1"><a class="header-anchor" href="#revert"><span>Revert</span></a></h3><p>还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以 <code>revert:</code> 开头，后面跟着被撤销 commit 的 Header。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">revert:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> feat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pencil</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;graphiteWidth&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> option</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">This</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reverts</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 667ecc1654a317a13331b17617d973392f415f02.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Body 部分的格式是固定的，必须写成 <code>This reverts commit &amp;lt;hash&gt;.</code>，其中 hash 是被撤销 commit 的 SHA 标识符。</p><p>如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的 Reverts 小标题下面。</p><p>最后来看一个例子，算是一个总结，至于具体内容还是要根据实际情况来填写。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">feat:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 添加了分享功能</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">给每篇博文添加了分享功能</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 添加分享到微博功能</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 添加分享到微信功能</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 添加分享到朋友圈功能</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Issue</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> #1, #2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Close</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> #1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件推荐" tabindex="-1"><a class="header-anchor" href="#插件推荐"><span>插件推荐</span></a></h2><p>有了这些规范，也知道怎么写了，但是不是会担心记不住呢？不要怕，有插件可以用，如果使用 VsCode 的话，可以安装一个叫 <strong>Commit Message Editor</strong> 的插件。</p><p>可以根据提示信息直接写：</p><p><img src="https://cdn.jsdelivr.net/gh/yongxinz/picb@main/workflow/preview1.gif" alt=""></p><p>也可以使用表单的方式，有选项可以选择：</p><p><img src="https://cdn.jsdelivr.net/gh/yongxinz/picb@main/workflow/preview2.gif" alt=""></p><p>这样不仅可以很方便地写提交说明了，还可以使提交说明更加的规范。</p><p>以上就是本文的全部内容，如果觉得还不错的话欢迎<strong>点赞</strong>，<strong>转发</strong>和<strong>关注</strong>，感谢支持。</p><hr><p><strong>参考文章：</strong></p><ul><li>https://juejin.cn/post/6960541430473293837</li><li>https://mrseawave.github.io/blogs/articles/2021/03/31/git-commit-message/</li></ul><p><strong>推荐阅读：</strong></p><ul><li><a href="https://mp.weixin.qq.com/s/hRd1UNMRutmA6MGmswweBw" target="_blank" rel="noopener noreferrer">Git 分支管理策略</a></li></ul>`,58)]))}const k=s(l,[["render",t],["__file","20241105165400.html.vue"]]),d=JSON.parse('{"path":"/zhaosheng/bug/20241105165400.html","title":"git 提交规范","lang":"zh-CN","frontmatter":{"title":"git 提交规范","description":"原文链接： Git Commit Message 应该怎么写？ 最近被同事吐槽了，说我代码提交说明写的太差。其实都不用他吐槽，我自己心里也非常清楚。毕竟很多时候犯懒，都是直接一个 -m \\"fix\\" 就提交上去了。 这样做是非常不好的，我也是自食恶果，深受其害。特别是查看历史提交记录时，想通过提交说明来了解当时的功能变更，基本不可能，都得点进去看代码才行...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zhaosheng/bug/20241105165400.html"}],["meta",{"property":"og:site_name","content":"蜉蝣"}],["meta",{"property":"og:title","content":"git 提交规范"}],["meta",{"property":"og:description","content":"原文链接： Git Commit Message 应该怎么写？ 最近被同事吐槽了，说我代码提交说明写的太差。其实都不用他吐槽，我自己心里也非常清楚。毕竟很多时候犯懒，都是直接一个 -m \\"fix\\" 就提交上去了。 这样做是非常不好的，我也是自食恶果，深受其害。特别是查看历史提交记录时，想通过提交说明来了解当时的功能变更，基本不可能，都得点进去看代码才行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/yongxinz/picb@main/workflow/preview1.gif"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-05T08:58:35.000Z"}],["meta",{"property":"article:author","content":"wfy"}],["meta",{"property":"article:modified_time","content":"2024-11-05T08:58:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git 提交规范\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/yongxinz/picb@main/workflow/preview1.gif\\",\\"https://cdn.jsdelivr.net/gh/yongxinz/picb@main/workflow/preview2.gif\\"],\\"dateModified\\":\\"2024-11-05T08:58:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wfy\\",\\"url\\":\\"https://acitrus.cn\\"}]}"]]},"headers":[{"level":2,"title":"Commit Message 格式","slug":"commit-message-格式","link":"#commit-message-格式","children":[{"level":3,"title":"Header","slug":"header","link":"#header","children":[]},{"level":3,"title":"Body","slug":"body","link":"#body","children":[]},{"level":3,"title":"Footer","slug":"footer","link":"#footer","children":[]},{"level":3,"title":"Revert","slug":"revert","link":"#revert","children":[]}]},{"level":2,"title":"插件推荐","slug":"插件推荐","link":"#插件推荐","children":[]}],"git":{"createdTime":1730796897000,"updatedTime":1730797115000,"contributors":[{"name":"wfy-belief","email":"mail@acitrus.cn","commits":2}]},"readingTime":{"minutes":4.32,"words":1297},"filePathRelative":"zhaosheng/bug/20241105165400.md","localizedDate":"2024年11月5日","autoDesc":true}');export{k as comp,d as data};