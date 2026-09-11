import{j as i}from"./iframe-nPEDWuq5.js";import{O as p}from"./object-table-CRPiQ3Ub.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-2tZwf4Bb.js";import"./preload-helper-C6v3Woxd.js";import"./Table-lCMrQkNT.js";import"./index-BDaAzszu.js";import"./Dialog-UbMhrZBy.js";import"./cross-CAR7WZMr.js";import"./svgIconContainer-Buy0gbpp.js";import"./useBaseUiId-BXoUi6bA.js";import"./InternalBackdrop-Yc2AYYIP.js";import"./composite-CnhzSObF.js";import"./index-BWMgc9TH.js";import"./index-DshB7Dwn.js";import"./index-DwMLeagM.js";import"./useEventCallback-DT88xX0T.js";import"./SkeletonBar-qZCRr-4g.js";import"./LoadingCell-B4XwyJKF.js";import"./ColumnConfigDialog-aEeFW2sQ.js";import"./DraggableList-BgjPQF0b.js";import"./search-CDt_zXJw.js";import"./Input-D9N0trYU.js";import"./useControlled-BvjcIJZ1.js";import"./Button-BdGhF_Br.js";import"./small-cross-BgQyzeJV.js";import"./ActionButton-CQHkvHtv.js";import"./Checkbox-mO8D-c8M.js";import"./useValueChanged-K-OlizrE.js";import"./CollapsiblePanel-7oyGI4Ll.js";import"./MultiColumnSortDialog-kEPt91j4.js";import"./MenuTrigger-CluvJSuE.js";import"./CompositeItem-CryHE6pf.js";import"./ToolbarRootContext-kq769ncg.js";import"./getDisabledMountTransitionStyles-BrBhvHF_.js";import"./getPseudoElementBounds-DZQnzGS3.js";import"./chevron-down-I8DXHveL.js";import"./index-Bdb3f4mb.js";import"./error-CBIwIhhP.js";import"./BaseCbacBanner-BeAP6OMH.js";import"./makeExternalStore-CYa6UY1g.js";import"./Tooltip-ByNkcQt7.js";import"./PopoverPopup-D49G2G7z.js";import"./debounce-B0x1PKSV.js";import"./useOsdkClient-CJxHdyXB.js";import"./tick-C2ltMR2g.js";import"./DropdownField-D0J2AzMJ.js";import"./isEqual-CL-UmrLO.js";import"./withOsdkMetrics-DX-TmC7j.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
