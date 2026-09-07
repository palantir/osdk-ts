import{j as i}from"./iframe-BtBIXkF3.js";import{O as p}from"./object-table-9UB2qNHK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C0mMQcc0.js";import"./preload-helper-KCRTf-fU.js";import"./Table-C-92Mm7K.js";import"./index-BGAjKCp6.js";import"./Dialog-yW4mTTj3.js";import"./cross-B9mjFWYU.js";import"./svgIconContainer-CclLyuS6.js";import"./useBaseUiId-CzkvuYxc.js";import"./InternalBackdrop-CxX8IWWG.js";import"./composite-Bn3hBJno.js";import"./index-DnxktrWp.js";import"./index-Bg1G_Vw4.js";import"./index-D1E8i8Wn.js";import"./useEventCallback-BQpb3sO5.js";import"./SkeletonBar-BNOhPsmd.js";import"./LoadingCell-C5Xqiqpu.js";import"./ColumnConfigDialog-auwReXLV.js";import"./DraggableList-DW3EaiLm.js";import"./search-DV3YNQgX.js";import"./Input-CZ_pHuwE.js";import"./useControlled-Bsm9yLUZ.js";import"./Button-FoDlRoyn.js";import"./small-cross-D7pBBSfk.js";import"./ActionButton-CXzhKuCF.js";import"./Checkbox-I1uYLB9H.js";import"./useValueChanged-DWNSNYCY.js";import"./CollapsiblePanel-CZO-nI2a.js";import"./MultiColumnSortDialog-DrKFPM2W.js";import"./MenuTrigger-DRF14xJF.js";import"./CompositeItem-BCTeJPmX.js";import"./ToolbarRootContext-B_9qz0NR.js";import"./getDisabledMountTransitionStyles-D444HRMW.js";import"./getPseudoElementBounds-DWPVaQIw.js";import"./chevron-down-BHLBt5vn.js";import"./index-C81F4-IO.js";import"./error-VXjIMzYn.js";import"./BaseCbacBanner-CdTxml7S.js";import"./makeExternalStore-CMGSbNhD.js";import"./Tooltip-BzRRe3iu.js";import"./PopoverPopup-CII93Llt.js";import"./debounce-fpq53JQI.js";import"./useOsdkClient-Dw51PFJi.js";import"./tick-BfzomYJ0.js";import"./DropdownField-CeeFHjMT.js";import"./isEqual-Nrqv2hX0.js";import"./withOsdkMetrics-CEusHpqR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
