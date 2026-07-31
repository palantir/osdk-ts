import{j as i}from"./iframe-BPejH73A.js";import{O as p}from"./object-table-BM1W0EFU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-3wVAtJKh.js";import"./preload-helper-DroWujke.js";import"./Table-BQaqgvCi.js";import"./index-B90tI0ID.js";import"./Dialog-DRUUi3Wp.js";import"./cross-DBEmAhHS.js";import"./svgIconContainer-CEusbL27.js";import"./useBaseUiId-CFfBCCWK.js";import"./InternalBackdrop-DSQpswgn.js";import"./composite-_PR9ooYN.js";import"./index-2yc_vRjp.js";import"./index-CbqreBW3.js";import"./index-DBYivAkQ.js";import"./useEventCallback-1Utq1QRF.js";import"./SkeletonBar-D6Oa3KA0.js";import"./LoadingCell-CBo5MV-z.js";import"./ColumnConfigDialog-CpLlA6jk.js";import"./DraggableList-ClUkgDHl.js";import"./search-Dr4m-uvV.js";import"./Input-BzT6UcMr.js";import"./useControlled-CsZk8XdE.js";import"./isEqual-bb9A_F_C.js";import"./isObject-C7-47GMK.js";import"./Button-Ckubio33.js";import"./ActionButton-D1_EuqHU.js";import"./Checkbox--6IOVxGe.js";import"./useValueChanged-B-XYYeM4.js";import"./CollapsiblePanel-BgkKbEQJ.js";import"./MultiColumnSortDialog-BfNxIUal.js";import"./MenuTrigger-gLOb7BVs.js";import"./CompositeItem-CePwhpAH.js";import"./ToolbarRootContext-BfoWDH0x.js";import"./getDisabledMountTransitionStyles-CbVOYQ3J.js";import"./getPseudoElementBounds-BT3Ejfqn.js";import"./chevron-down-B-cXR2Ke.js";import"./index-CxUM6NOw.js";import"./error-Cd-jBlIi.js";import"./BaseCbacBanner-hFdTFYmC.js";import"./makeExternalStore-BSENvNfl.js";import"./Tooltip-DPw8xUBx.js";import"./PopoverPopup-DPrLdIK8.js";import"./toNumber-YHv5OcAe.js";import"./useOsdkClient-CCc85gpw.js";import"./tick-BeQLtX8e.js";import"./DropdownField-CPQHI8OE.js";import"./withOsdkMetrics-Wb8pNEXr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
