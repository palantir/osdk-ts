import{j as i}from"./iframe-CyyLqEr6.js";import{O as p}from"./object-table-CbR1hdH_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DUpVEl2w.js";import"./preload-helper-CLKx56fr.js";import"./Table-DaFGsEZ-.js";import"./index-CXVe_-qM.js";import"./Dialog-rUw7Tztf.js";import"./cross-aF3LHT_W.js";import"./svgIconContainer-BXEQoARc.js";import"./useBaseUiId-DNRq1Vj2.js";import"./InternalBackdrop-VqPqEODt.js";import"./composite-Cu366ztE.js";import"./index-Btxr5vyt.js";import"./index-DplZ--1V.js";import"./index-CIcqP63k.js";import"./useEventCallback-BkrIhA4F.js";import"./SkeletonBar-hSnelWIw.js";import"./LoadingCell-DtrB1isk.js";import"./ColumnConfigDialog-B_4Ulu0K.js";import"./DraggableList-8Ob4ZCYO.js";import"./search-9XevuXRY.js";import"./Input-CGZ9tgdl.js";import"./useControlled-SLbcZlz1.js";import"./Button-CE0RBh88.js";import"./small-cross-CeBhb5K4.js";import"./ActionButton-5WAWMSR-.js";import"./Checkbox-CHHV-n-v.js";import"./useValueChanged-CfwgduQf.js";import"./CollapsiblePanel-DobbT5mN.js";import"./MultiColumnSortDialog-RYejZIqi.js";import"./MenuTrigger-BvcjDDgI.js";import"./CompositeItem-4N3XpUmD.js";import"./ToolbarRootContext-Dx3qy1zP.js";import"./getDisabledMountTransitionStyles-DqpTbrQs.js";import"./getPseudoElementBounds-B0QwFzeX.js";import"./chevron-down-C0fFk26N.js";import"./index-BNa8gt2p.js";import"./error-Dp6C50rF.js";import"./BaseCbacBanner-Dqcr-F5q.js";import"./makeExternalStore-B6005TWn.js";import"./Tooltip-1zWBtBzZ.js";import"./PopoverPopup-CjI5fBm4.js";import"./debounce-Kl0LOmqT.js";import"./useOsdkClient-TJGS2RfR.js";import"./tick-Bt0G-C4s.js";import"./DropdownField-77S-oXAU.js";import"./isEqual-Cm4IXkcb.js";import"./withOsdkMetrics-D87Y42PU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
