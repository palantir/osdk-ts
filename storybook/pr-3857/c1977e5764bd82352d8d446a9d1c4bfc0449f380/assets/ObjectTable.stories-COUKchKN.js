import{j as i}from"./iframe-HkADxMgA.js";import{O as p}from"./object-table-BPD1qlMS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-aRw_WeTp.js";import"./preload-helper-DTtqGHxT.js";import"./Table-BBDxoEZg.js";import"./index-DUW8wRrQ.js";import"./Dialog-C1cC5oO0.js";import"./cross-BJLKHlwA.js";import"./svgIconContainer-uqcLMh9h.js";import"./useBaseUiId-B28qMeqB.js";import"./InternalBackdrop-KSJdc-Eh.js";import"./composite-Bshgoqdb.js";import"./index-_47i1T5T.js";import"./index-CCQw_l8A.js";import"./index-D4OnPD6V.js";import"./useEventCallback-BT13A2s8.js";import"./SkeletonBar-BR_z_H5s.js";import"./LoadingCell-CXRScZCO.js";import"./ColumnConfigDialog-CIM34A1V.js";import"./DraggableList-BFgNNJKw.js";import"./search-oee3a-xy.js";import"./Input-CdSqdp7n.js";import"./useControlled-0FKUHHKR.js";import"./Button-DXksPsq1.js";import"./small-cross-DtnBRH_a.js";import"./ActionButton-DFp4Eahm.js";import"./Checkbox-CdSHxSSr.js";import"./useValueChanged-CLKZqZ1n.js";import"./CollapsiblePanel-yZRRBOeb.js";import"./MultiColumnSortDialog-DrYKmP3m.js";import"./MenuTrigger-B0q9NtM8.js";import"./CompositeItem-DIBhAm7K.js";import"./ToolbarRootContext-B2D7jBHZ.js";import"./getDisabledMountTransitionStyles-D_z8sWSZ.js";import"./getPseudoElementBounds-CV6q-bAI.js";import"./chevron-down-7aN-gdcZ.js";import"./index-AGvrmZqA.js";import"./error-WFtpCqwH.js";import"./BaseCbacBanner-MiPOlZwj.js";import"./makeExternalStore-XFQAED1_.js";import"./Tooltip-6u6XECjM.js";import"./PopoverPopup-C8dD0wlV.js";import"./toNumber-CFUI-sBy.js";import"./useOsdkClient-BUObA5LC.js";import"./tick-zwZIIcdN.js";import"./DropdownField-DV-Des1S.js";import"./withOsdkMetrics-CS878clc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
