import{j as i}from"./iframe-C-P2XTps.js";import{O as p}from"./object-table-Bq9MDu7_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cdbvm4OP.js";import"./preload-helper-B2ciRt_1.js";import"./Table-DVwBGtjK.js";import"./index-TAkEmTOr.js";import"./Dialog-CXf6dGMs.js";import"./cross-C-FokI4v.js";import"./svgIconContainer-CrU3EDkF.js";import"./useBaseUiId-CWFhVJhL.js";import"./InternalBackdrop-DN8Fgs_M.js";import"./composite-BK1c30lA.js";import"./index-CpJX8S-W.js";import"./index-DBmKylag.js";import"./index-I0ozREYH.js";import"./useEventCallback-B_mhEv2A.js";import"./SkeletonBar-BYO6lwk8.js";import"./LoadingCell-SjPMbpcz.js";import"./ColumnConfigDialog-EIQNHS4y.js";import"./DraggableList-BEOqV1y4.js";import"./search-l1NECfxN.js";import"./Input-0Zox7t1W.js";import"./useControlled-DNAq-ux-.js";import"./isEqual-CgKCGaj5.js";import"./isObject-Oa6eWQo3.js";import"./Button-BZmN5Brq.js";import"./ActionButton-Csbt1rAg.js";import"./Checkbox-DAv4V2db.js";import"./useValueChanged-WBgfRasG.js";import"./CollapsiblePanel-CwGcW1pA.js";import"./MultiColumnSortDialog-DkFJZRiJ.js";import"./MenuTrigger-XSCB7Qf-.js";import"./CompositeItem-Ej9oQnQL.js";import"./ToolbarRootContext-1n5Nj85T.js";import"./getDisabledMountTransitionStyles-9ubOsA0f.js";import"./getPseudoElementBounds-eIHoREO7.js";import"./chevron-down-Dx0BgYzW.js";import"./index-DTSw3ggz.js";import"./error-ClI8SWaI.js";import"./BaseCbacBanner-BtJRxHFH.js";import"./makeExternalStore-D0f_pEt1.js";import"./Tooltip-DLrh6rvI.js";import"./PopoverPopup-C1mLTGSJ.js";import"./debounce-BYcEFv3c.js";import"./useOsdkClient-C-QBDUEZ.js";import"./tick-BLOKre96.js";import"./DropdownField-CjWAPAN4.js";import"./withOsdkMetrics-DehsSUGO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
