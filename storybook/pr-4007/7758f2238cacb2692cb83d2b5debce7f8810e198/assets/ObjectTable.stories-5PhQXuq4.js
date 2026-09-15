import{j as i}from"./iframe-DugxyHXW.js";import{O as p}from"./object-table-7pPwAMRd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BZi5rOxm.js";import"./preload-helper-sKHH7dZZ.js";import"./Table-Fy8p0ukL.js";import"./index-BnymHSBX.js";import"./Dialog-hoMNh3xw.js";import"./cross-BSDPKBN8.js";import"./svgIconContainer-BhR3_WjC.js";import"./useBaseUiId-DXSoLqlj.js";import"./InternalBackdrop-C5PVGWxl.js";import"./composite-B6PfDTrv.js";import"./index-DEsgQO2-.js";import"./index-C1eIh-0N.js";import"./index-OCBhvrRs.js";import"./useEventCallback-BWN3beAb.js";import"./SkeletonBar-DTF20Ls3.js";import"./LoadingCell-Cs5Ui_Mh.js";import"./ColumnConfigDialog-BNfKn6pP.js";import"./DraggableList-Br-ROzH9.js";import"./search-HmVN54vs.js";import"./Input-D5dfXCf5.js";import"./useControlled-CrSksIZl.js";import"./Button-Dr2gNfRq.js";import"./small-cross-DLi0JibG.js";import"./ActionButton-PxTm-wqz.js";import"./Checkbox-DwqZQOlu.js";import"./useValueChanged-D8LItfM_.js";import"./CollapsiblePanel-EgTSYgZn.js";import"./MultiColumnSortDialog-CFQFDd5R.js";import"./MenuTrigger-CTsDP6tB.js";import"./CompositeItem-V75ZZ8Nq.js";import"./ToolbarRootContext-Cl7j9rKh.js";import"./getDisabledMountTransitionStyles-DB3JFAJ8.js";import"./getPseudoElementBounds-Ck5edXWa.js";import"./chevron-down-BHed8mrw.js";import"./index-BbAAxPka.js";import"./error-DAzclkpO.js";import"./BaseCbacBanner-BO6UZWW2.js";import"./makeExternalStore-WS2cTnp-.js";import"./Tooltip-GeR-nHC8.js";import"./PopoverPopup-lrG87DA3.js";import"./debounce-SsrRBLaw.js";import"./useOsdkClient-CjZHpbU9.js";import"./tick-BpCxOvMz.js";import"./DropdownField-Dd9c5Emh.js";import"./isEqual-8_9WHdsY.js";import"./withOsdkMetrics-x8dgsXC7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
