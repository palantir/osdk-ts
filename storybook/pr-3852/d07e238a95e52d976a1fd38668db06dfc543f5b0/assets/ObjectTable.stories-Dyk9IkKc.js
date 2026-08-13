import{j as i}from"./iframe-DPU4dU5t.js";import{O as p}from"./object-table-CYL4n5nH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BZVcyM_9.js";import"./preload-helper-BfY5BfRw.js";import"./Table-DxksXrgt.js";import"./index-BWZ_jsFd.js";import"./Dialog-D3y20SaV.js";import"./cross-GP91ECu7.js";import"./svgIconContainer-DMEc4fQs.js";import"./useBaseUiId-DL2j5itx.js";import"./InternalBackdrop-CIo_o02W.js";import"./composite-CBPw2eZY.js";import"./index-CQuzS6zi.js";import"./index-BuyWU3Mi.js";import"./index-D14glJLB.js";import"./useEventCallback-DHUcspcy.js";import"./SkeletonBar-BbwbNpqo.js";import"./LoadingCell-VRBagF7F.js";import"./ColumnConfigDialog-DnTFGitq.js";import"./DraggableList-DKWsDlTt.js";import"./search-CWx5rAiq.js";import"./Input-CkOmJ7l-.js";import"./useControlled-7lGv1XpS.js";import"./isEqual-r_BBkpT6.js";import"./isObject-DEhLATs2.js";import"./Button-CHOirzFo.js";import"./ActionButton-D4zxx4Li.js";import"./Checkbox-DBhLhEUm.js";import"./useValueChanged-lfKJ3AhH.js";import"./CollapsiblePanel-DyNQU87X.js";import"./MultiColumnSortDialog-CY8yqai7.js";import"./MenuTrigger-DqHXO7hi.js";import"./CompositeItem-CDOXdB89.js";import"./ToolbarRootContext-DHSfKOeF.js";import"./getDisabledMountTransitionStyles-CJgdQ1n1.js";import"./getPseudoElementBounds-BcmXpxSp.js";import"./chevron-down-CAPpObNP.js";import"./index-AkfEBwJt.js";import"./error-hkPL5XIl.js";import"./BaseCbacBanner-riFku8O-.js";import"./makeExternalStore-GTeGNvOb.js";import"./Tooltip-K5t-yHF7.js";import"./PopoverPopup-B47v2T3R.js";import"./toNumber-CVF7Lzyk.js";import"./useOsdkClient-D5Hs2Xu0.js";import"./tick-C_OcSV--.js";import"./DropdownField-YPok9mq7.js";import"./withOsdkMetrics-DVg-5hEq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
