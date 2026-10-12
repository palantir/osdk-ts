import{j as i}from"./iframe-De0JvUDI.js";import{O as p}from"./object-table-QpxGEIzu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BoRFEHII.js";import"./preload-helper-DW0Viam7.js";import"./Table-DA5xr5v4.js";import"./index-D2ucVBaK.js";import"./Dialog-bdLZ2FJb.js";import"./cross-D3NokT3S.js";import"./svgIconContainer-C40TH68P.js";import"./useBaseUiId-ClfRKfDN.js";import"./InternalBackdrop-BdrWkdLQ.js";import"./composite-Un7w28gc.js";import"./index-DSWLkZGL.js";import"./index-DRUMpWwL.js";import"./index-DPn3VSK_.js";import"./useEventCallback-CU5U5yco.js";import"./SkeletonBar-CWa0WbiQ.js";import"./LoadingCell-Cxk8ytcA.js";import"./ColumnConfigDialog-DW7uPPVa.js";import"./DraggableList-Bo93aEiY.js";import"./search-MoU8b7Yy.js";import"./Input-C_CGkTkl.js";import"./useControlled-CRrAgDjk.js";import"./Button-Bn-SxZv6.js";import"./small-cross--9BOpqr2.js";import"./ActionButton-DqBp-oot.js";import"./Checkbox-B-C0PSHq.js";import"./useValueChanged-B_zks5LA.js";import"./CollapsiblePanel-TSUxngdh.js";import"./MultiColumnSortDialog-B0i_cXtV.js";import"./MenuTrigger-Ckk1btDP.js";import"./CompositeItem-w6RFopZN.js";import"./ToolbarRootContext-Bxy7ajQD.js";import"./getDisabledMountTransitionStyles-BkAZ14rI.js";import"./getPseudoElementBounds-6gBn4IJF.js";import"./chevron-down-Yz9bQ-ge.js";import"./index-POBaPims.js";import"./error-D8UWFeng.js";import"./BaseCbacBanner-D6AKgLpj.js";import"./makeExternalStore-CvSmdJRq.js";import"./Tooltip-DXEGgoGu.js";import"./PopoverPopup-DNrWS3x8.js";import"./debounce-C6Uj-jcf.js";import"./useOsdkClient-DKAeWvuz.js";import"./tick-CabygoeH.js";import"./DropdownField-Bkm-lwWx.js";import"./isEqual-B1nIHKd3.js";import"./withOsdkMetrics-DlBld6qB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
