import{j as i}from"./iframe-BXnew5By.js";import{O as p}from"./object-table-BN25w3m8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-LAgHEpio.js";import"./preload-helper-BgFOTMV1.js";import"./Table-DKeEq1LX.js";import"./index-DJpoqriT.js";import"./Dialog-BJNOd716.js";import"./cross-CeycVR7t.js";import"./svgIconContainer-BOoSLwOJ.js";import"./useBaseUiId-Co3zeB_F.js";import"./InternalBackdrop-huoQMuNZ.js";import"./composite-BAOjtMlw.js";import"./index-ytG0jJ_D.js";import"./index-Db3xMcrp.js";import"./index-By4f0Urp.js";import"./useEventCallback-Dsd6TDvm.js";import"./SkeletonBar-DCvGLNk1.js";import"./LoadingCell-BL4XcoMT.js";import"./ColumnConfigDialog-fgbl5wpm.js";import"./DraggableList-CceqTZsM.js";import"./search-hra39GH9.js";import"./Input-CvomcPkC.js";import"./useControlled-ClYOKgQs.js";import"./Button-TEbldry0.js";import"./small-cross-BNPCi4md.js";import"./ActionButton-D24YaycG.js";import"./Checkbox-D73LO1C5.js";import"./useValueChanged-7SKRVsQE.js";import"./CollapsiblePanel-DKOlS72j.js";import"./MultiColumnSortDialog-B5_Au34U.js";import"./MenuTrigger-eQ2rWHau.js";import"./CompositeItem-W1wcrO0a.js";import"./ToolbarRootContext-DobZfpb_.js";import"./getDisabledMountTransitionStyles-BPAsAy4r.js";import"./getPseudoElementBounds-yDzXL7xl.js";import"./chevron-down-BWrlC_BY.js";import"./index-Bopk1NCu.js";import"./error-5wYybOyD.js";import"./BaseCbacBanner-ln0Atg9L.js";import"./makeExternalStore-rqkc6KEp.js";import"./Tooltip-DFS9Zaq4.js";import"./PopoverPopup-myoJjBlp.js";import"./debounce-4CN7S1Vp.js";import"./useOsdkClient-Dv-ty224.js";import"./tick-DUV4yo-s.js";import"./DropdownField-Bxvwi2SR.js";import"./isEqual-D61AOONF.js";import"./withOsdkMetrics-XvAUFTIm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
