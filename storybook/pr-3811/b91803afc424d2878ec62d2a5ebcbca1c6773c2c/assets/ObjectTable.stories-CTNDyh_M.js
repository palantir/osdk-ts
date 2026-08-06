import{j as i}from"./iframe-DP3WXvf2.js";import{O as p}from"./object-table-CmVY_AZz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ck7kMEJ_.js";import"./preload-helper-BrwfpXMJ.js";import"./Table-BZMJkkfP.js";import"./index-tWkBFRv4.js";import"./Dialog-Bn0xrUiW.js";import"./cross-D7VOxDSd.js";import"./svgIconContainer-D5YO1S9t.js";import"./useBaseUiId-BOLy-sbk.js";import"./InternalBackdrop-kfOS6-6n.js";import"./composite-Bs_HXNR1.js";import"./index-4F4S8ihM.js";import"./index-dP7GtPgB.js";import"./index-D0i847yp.js";import"./useEventCallback-4WPVou47.js";import"./SkeletonBar-CQxkz69G.js";import"./LoadingCell-gmzsNyZZ.js";import"./ColumnConfigDialog-0wgW781K.js";import"./DraggableList-B5-sdrQx.js";import"./search-COU45aDA.js";import"./Input-C7i9bi6Y.js";import"./useControlled-DXyaPIDf.js";import"./isEqual-CxjDM9uY.js";import"./isObject-PPvT23lN.js";import"./Button-BlADiT-L.js";import"./ActionButton-CMlhPEAt.js";import"./Checkbox-BwX4PU9M.js";import"./useValueChanged-DQRuCOWP.js";import"./CollapsiblePanel-CPiAZkOy.js";import"./MultiColumnSortDialog-BQR6klSA.js";import"./MenuTrigger-B7KN4Klu.js";import"./CompositeItem-CAMOw487.js";import"./ToolbarRootContext-DomAOERZ.js";import"./getDisabledMountTransitionStyles-WVqhRiar.js";import"./getPseudoElementBounds-DyIib3FW.js";import"./chevron-down-DveMJf_3.js";import"./index-D_FYBlgp.js";import"./error-DEAaKdsx.js";import"./BaseCbacBanner-DHuOvfxS.js";import"./makeExternalStore-DqGepTDF.js";import"./Tooltip-CeGAKU6r.js";import"./PopoverPopup-BbWQWTj8.js";import"./toNumber-DgM7wa7_.js";import"./useOsdkClient-DHaYNoSF.js";import"./tick-CedZqE1V.js";import"./DropdownField-DLcwvT9B.js";import"./withOsdkMetrics-D03opsaL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
