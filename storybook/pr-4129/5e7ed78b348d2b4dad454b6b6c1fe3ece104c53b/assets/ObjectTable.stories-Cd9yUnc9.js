import{j as i}from"./iframe-DcZIbII1.js";import{O as p}from"./object-table-DLeGe8ZQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-PNFg_iPx.js";import"./preload-helper-CtJBcs4m.js";import"./Table-BWSDeoBK.js";import"./index-CknXFCuG.js";import"./Dialog-COig6MDV.js";import"./cross-B7rc_3vM.js";import"./svgIconContainer-CCPtMkY_.js";import"./useBaseUiId-Bwnxqilm.js";import"./InternalBackdrop-vtxyY5fQ.js";import"./composite-im6S2sQa.js";import"./index-Dkeo5kI9.js";import"./index-B9y2Cfx6.js";import"./index-DPboZthR.js";import"./useEventCallback-DUdSVzSq.js";import"./SkeletonBar-CGLWA7k6.js";import"./LoadingCell-BOgRlDnX.js";import"./ColumnConfigDialog-BHw8jkAc.js";import"./DraggableList-PY47Xjpq.js";import"./search-ByPzgBRT.js";import"./Input-DgnbxA8W.js";import"./useControlled-CtuIn0tc.js";import"./Button-fbYfSW4g.js";import"./small-cross-BNLYCYQq.js";import"./ActionButton-Bt_c9QVn.js";import"./Checkbox-oOA2jJzU.js";import"./useValueChanged-BCgCGkWP.js";import"./CollapsiblePanel-CJKXn1Jt.js";import"./MultiColumnSortDialog-CExlz1v8.js";import"./MenuTrigger-DOR0ot29.js";import"./CompositeItem-0HlJZQq8.js";import"./ToolbarRootContext-DW70chtw.js";import"./getDisabledMountTransitionStyles-BRHOOZl_.js";import"./getPseudoElementBounds-CCVDhmIO.js";import"./chevron-down-CgbkcCiQ.js";import"./index-DSHI6oH0.js";import"./error-CfhtcL_7.js";import"./BaseCbacBanner-CY3PtWK0.js";import"./makeExternalStore-Dx5t4IsM.js";import"./Tooltip-Cs9p6XT8.js";import"./PopoverPopup-CwL3PPak.js";import"./debounce-BPpQpvYV.js";import"./useOsdkClient-BlHc1QH0.js";import"./tick-CLXIS-et.js";import"./DropdownField-9Vn4V-zp.js";import"./isEqual-ByvfUgin.js";import"./withOsdkMetrics-D2PqzxOJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
