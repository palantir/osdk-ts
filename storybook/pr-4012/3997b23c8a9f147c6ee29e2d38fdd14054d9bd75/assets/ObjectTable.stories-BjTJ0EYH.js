import{j as i}from"./iframe-BFPzVvxY.js";import{O as p}from"./object-table-CHhCZndI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ChsJ9VTL.js";import"./preload-helper-CFSQ1G8J.js";import"./Table-B-Hb2ntx.js";import"./index-CCGax6tv.js";import"./Dialog-BonrkksJ.js";import"./cross-CB2SiIfn.js";import"./svgIconContainer-zvRTjm1U.js";import"./useBaseUiId-lA3GGoRZ.js";import"./InternalBackdrop-DCGl8xdy.js";import"./composite-ByiulZct.js";import"./index-CDsjmQfs.js";import"./index-CQTk_3Md.js";import"./index-D7KtHfV_.js";import"./useEventCallback-BSZKvIy_.js";import"./SkeletonBar-Wei8CvBD.js";import"./LoadingCell-DVS43WKx.js";import"./ColumnConfigDialog-CxikgimD.js";import"./DraggableList-CPRGtOd_.js";import"./search-B9sXG8EA.js";import"./Input-SASUrwvz.js";import"./useControlled-CS4AozJ9.js";import"./Button-DM9BYVFF.js";import"./small-cross-BqhrN3UV.js";import"./ActionButton-D-sFARx4.js";import"./Checkbox-WVx5Lfwa.js";import"./useValueChanged-CMkIGbNr.js";import"./CollapsiblePanel-B72c7sdX.js";import"./MultiColumnSortDialog-BCIJp_FY.js";import"./MenuTrigger-DM82LJ7Y.js";import"./CompositeItem-hoe_aJWZ.js";import"./ToolbarRootContext-Bn6OEZQ8.js";import"./getDisabledMountTransitionStyles-DVrl5q0D.js";import"./getPseudoElementBounds-D0xI4mdk.js";import"./chevron-down-Ui6vbKSY.js";import"./index-D76rkl6E.js";import"./error-C6XCbteP.js";import"./BaseCbacBanner-pMf8_PAt.js";import"./makeExternalStore-ke7w82mB.js";import"./Tooltip-C5Z1Ogwk.js";import"./PopoverPopup-BmVShL7M.js";import"./debounce-DaSP3gYA.js";import"./useOsdkClient-D0KfoQzg.js";import"./tick-COqQzl1O.js";import"./DropdownField-CKw_sIr2.js";import"./isEqual-nfganQgj.js";import"./withOsdkMetrics-BCHhaE-8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
