import{j as i}from"./iframe-q6NKVMOW.js";import{O as p}from"./object-table-DzbbIM5Z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C_cualaH.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BbYjbBYd.js";import"./index-B5MNjG-7.js";import"./Dialog-3E9ScHwj.js";import"./cross-kBxFNNzf.js";import"./svgIconContainer-Cl-19u26.js";import"./useBaseUiId-DS12ecTt.js";import"./InternalBackdrop-_jEsJaJc.js";import"./composite-DWdzf7xq.js";import"./index-CXmB_YXt.js";import"./index-B8pCVHdG.js";import"./index-CPso5KRe.js";import"./useEventCallback-BjoOPJhQ.js";import"./SkeletonBar-BLnRSmtQ.js";import"./LoadingCell-BfelY0um.js";import"./ColumnConfigDialog-DCPZqHqP.js";import"./DraggableList-OQJn8TwR.js";import"./search-BG6VKYDl.js";import"./Input-CW_LwEgU.js";import"./useControlled-rHUBc6dP.js";import"./Button-B0F_wJsq.js";import"./small-cross-BFe6bKcr.js";import"./ActionButton-DELaTHWY.js";import"./Checkbox-Bo5IimwW.js";import"./useValueChanged-B_EMYZEM.js";import"./CollapsiblePanel-DpM02--P.js";import"./MultiColumnSortDialog-Bp3s0Soi.js";import"./MenuTrigger-Dlad_--F.js";import"./CompositeItem-Cm8x2Oga.js";import"./ToolbarRootContext-CrOFR8_B.js";import"./getDisabledMountTransitionStyles-Dy4RoREr.js";import"./getPseudoElementBounds-C7xHfoER.js";import"./chevron-down-DeyzUbGB.js";import"./index-N79EOdPZ.js";import"./error-C3FqO6Mu.js";import"./BaseCbacBanner-CGXBjJmn.js";import"./makeExternalStore-C_DYB-ey.js";import"./Tooltip-DdAmQHtJ.js";import"./PopoverPopup-CEvo7W78.js";import"./debounce-LdB-CNSo.js";import"./useOsdkClient-brfNmyCb.js";import"./tick-CVAXBWRm.js";import"./DropdownField-BtqcTwLB.js";import"./isEqual-DAYpnafB.js";import"./withOsdkMetrics-B0o7MA2A.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
