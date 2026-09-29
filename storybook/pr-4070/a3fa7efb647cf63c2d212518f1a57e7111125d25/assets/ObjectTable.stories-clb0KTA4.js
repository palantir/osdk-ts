import{j as i}from"./iframe-l_8eBvr6.js";import{O as p}from"./object-table-CaxH4GVl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cl4O0HaC.js";import"./preload-helper-CWo-haOY.js";import"./Table-DoYXsy_p.js";import"./index-pTEOeQs1.js";import"./Dialog-D5uirT7r.js";import"./cross-AIldtqcf.js";import"./svgIconContainer-BE3MMvAi.js";import"./useBaseUiId-GR3xcgzw.js";import"./InternalBackdrop-BwRQmd5J.js";import"./composite-DKO9W0st.js";import"./index-rFITWboZ.js";import"./index-CsnFWtbo.js";import"./index-BbfTT1Q9.js";import"./useEventCallback-DAeskcdy.js";import"./SkeletonBar-CDf6uP_r.js";import"./LoadingCell-Dvw-Ylel.js";import"./ColumnConfigDialog-BxJ9KUuv.js";import"./DraggableList-C2YkM-if.js";import"./search-53j1pAYR.js";import"./Input-b3HEdj9w.js";import"./useControlled-_ZKeS4Zg.js";import"./Button-D_UBsIlq.js";import"./small-cross-eWReh8kV.js";import"./ActionButton-DyHiHAz9.js";import"./Checkbox-BA2kB2zz.js";import"./useValueChanged-Dh9MsvOa.js";import"./CollapsiblePanel-YVCjpYyB.js";import"./MultiColumnSortDialog-BiDCU8at.js";import"./MenuTrigger-Doj1fSEU.js";import"./CompositeItem-DVcnG8tP.js";import"./ToolbarRootContext-D8m03rR2.js";import"./getDisabledMountTransitionStyles-Bv0Oi4hK.js";import"./getPseudoElementBounds-C0cGWyvs.js";import"./chevron-down-Dr_zm-jW.js";import"./index-CTOamDEC.js";import"./error-BjQYuyH5.js";import"./BaseCbacBanner-B6hZVpGP.js";import"./makeExternalStore-DEwbFKap.js";import"./Tooltip-CyHw9hKc.js";import"./PopoverPopup-D63UO-5k.js";import"./debounce-DGMy8DlN.js";import"./useOsdkClient-k3QwwWy-.js";import"./tick-BfV32k5E.js";import"./DropdownField-BsI2YIfo.js";import"./isEqual-CQ3ooCqh.js";import"./withOsdkMetrics-C36UZcw9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
