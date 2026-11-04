import{j as i}from"./iframe-DcblcpsD.js";import{O as p}from"./object-table-C0n6V8qq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-1GRpdGw-.js";import"./preload-helper-D_wMhyaD.js";import"./Table-B_qOtHsd.js";import"./index-7ach3CvX.js";import"./Dialog-CcR85Lmc.js";import"./cross-BsrNuqdH.js";import"./svgIconContainer-BNnsBEK2.js";import"./useBaseUiId-kDJ62DAx.js";import"./InternalBackdrop-vzMbdI9w.js";import"./composite-C6NGEWFA.js";import"./index-5vhpnJCd.js";import"./index-Dyr0XLHo.js";import"./index-BFsskuZE.js";import"./useEventCallback-BFyPF3KM.js";import"./SkeletonBar-CFgpPqeF.js";import"./LoadingCell-z7if_OnS.js";import"./ColumnConfigDialog-CRirQD-Y.js";import"./DraggableList--ymmfdOD.js";import"./search-DNqBvZq5.js";import"./Input-DFCeqSqF.js";import"./useControlled-i2WyCNOr.js";import"./Button-BDRb-Pkx.js";import"./small-cross-DPxvOvn1.js";import"./ActionButton-DEfTs481.js";import"./Checkbox-CQZoyJBa.js";import"./useValueChanged-DVi_uI5x.js";import"./CollapsiblePanel-Dy-ip83M.js";import"./MultiColumnSortDialog-DVx3zfNu.js";import"./MenuTrigger-CFbx5r7B.js";import"./CompositeItem-BDLcpoAw.js";import"./ToolbarRootContext-DePr5kCC.js";import"./getDisabledMountTransitionStyles-CMYjml29.js";import"./getPseudoElementBounds-DmerV0_o.js";import"./chevron-down-CzYSE9_L.js";import"./index-DjzvDUKT.js";import"./error-CKNR4CvZ.js";import"./BaseCbacBanner-DbcQhu-t.js";import"./makeExternalStore-DRuwFA-0.js";import"./Tooltip-NnVrtTvo.js";import"./PopoverPopup-C62qYoS6.js";import"./debounce-AIHTvjc-.js";import"./useOsdkClient-u3WB6gov.js";import"./tick-CvE3NYGn.js";import"./DropdownField-v-l2qfMk.js";import"./isEqual-BzUgPpSO.js";import"./withOsdkMetrics-CBgzbsXI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
