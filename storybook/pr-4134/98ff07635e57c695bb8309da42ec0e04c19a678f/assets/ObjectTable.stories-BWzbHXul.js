import{j as i}from"./iframe-CPvF6ZzM.js";import{O as p}from"./object-table-CWIzO1zP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C0tMjnrQ.js";import"./preload-helper-BI1t_NCm.js";import"./Table-bSpLxoee.js";import"./index-DfPxhOot.js";import"./Dialog-CcEQU90q.js";import"./cross-CmlX3m4X.js";import"./svgIconContainer-DKpS56Vd.js";import"./useBaseUiId-XltkNyEi.js";import"./InternalBackdrop-BcLn-51b.js";import"./composite-BWoYEjdT.js";import"./index-lsySavSd.js";import"./index-MWDzLIPR.js";import"./index-DcKmVIZM.js";import"./useEventCallback-BWX8o1CN.js";import"./SkeletonBar-BMdJeUof.js";import"./LoadingCell-CJmD9ke6.js";import"./ColumnConfigDialog-D3LttmNB.js";import"./DraggableList-m0jqdBM8.js";import"./search-BLNtYnra.js";import"./Input-Bc7_Uhxn.js";import"./useControlled-C9Dlz_cg.js";import"./Button-BOq8HNJy.js";import"./small-cross-B4RneZ3b.js";import"./ActionButton-DhYCkBu4.js";import"./Checkbox-C7eHtJoH.js";import"./useValueChanged-CWss0hf4.js";import"./CollapsiblePanel-BK_rHvoK.js";import"./MultiColumnSortDialog-C1G0U_eA.js";import"./MenuTrigger-DNDIxPcR.js";import"./CompositeItem-Hn04YYBd.js";import"./ToolbarRootContext-CXaq262I.js";import"./getDisabledMountTransitionStyles-BjJuktUq.js";import"./getPseudoElementBounds-6eTBtUcp.js";import"./chevron-down-eYoSNu4v.js";import"./index-DlqK99lM.js";import"./error-B87OsGL8.js";import"./BaseCbacBanner-VtmLPxLN.js";import"./makeExternalStore-S4D4bUbQ.js";import"./Tooltip-DCy2r5z4.js";import"./PopoverPopup-BxWvq6sk.js";import"./debounce-6I_M5ZGg.js";import"./useOsdkClient-DPiAHwl7.js";import"./tick-FC2fYi94.js";import"./DropdownField-B4l5M5yD.js";import"./isEqual-BsdyxzNC.js";import"./withOsdkMetrics-BRD3Y2PF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
