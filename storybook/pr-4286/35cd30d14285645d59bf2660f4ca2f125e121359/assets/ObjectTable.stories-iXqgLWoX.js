import{j as i}from"./iframe-CNj1GFG8.js";import{O as p}from"./object-table-B20McRtP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DpFHQ3Zu.js";import"./preload-helper-Cjo-XvAp.js";import"./Table-hVarz3zT.js";import"./index-oB_g-d5V.js";import"./Dialog-CtevSARu.js";import"./cross-B62mBt8r.js";import"./svgIconContainer-Bhefl8zi.js";import"./useBaseUiId-CsicFn0g.js";import"./InternalBackdrop-BST228YF.js";import"./composite-BHr8Wk2A.js";import"./index-BASR5P1U.js";import"./index-eXax19dP.js";import"./index-DBYFvaC0.js";import"./useEventCallback-DZKgTPL6.js";import"./SkeletonBar-Dj4WA_fP.js";import"./LoadingCell-Cw93mniw.js";import"./ColumnConfigDialog-DBdNRhsh.js";import"./DraggableList-BGs8eCS8.js";import"./search-9WBJrji3.js";import"./Input-BxtPTbIC.js";import"./useControlled-DjWof5sy.js";import"./Button-DUnKzmAM.js";import"./small-cross-D28p3scZ.js";import"./ActionButton-dwJP_byH.js";import"./Checkbox-DASCwVqc.js";import"./useValueChanged-Ca3Ymytd.js";import"./CollapsiblePanel-wgPcw7lQ.js";import"./MultiColumnSortDialog-1UePhGjD.js";import"./MenuTrigger-Bj_5Y0VG.js";import"./CompositeItem-xqfWa6Bp.js";import"./ToolbarRootContext-Nkrk5VcP.js";import"./getDisabledMountTransitionStyles-CoZOZsDn.js";import"./getPseudoElementBounds-BHXEpft8.js";import"./chevron-down-UgpOAJV9.js";import"./index-rvaooZlS.js";import"./error-D9mbXxgI.js";import"./BaseCbacBanner-DIo2SuO7.js";import"./makeExternalStore-CM009B6W.js";import"./Tooltip-BdIjn_4J.js";import"./PopoverPopup-YHCVuQAi.js";import"./debounce-Bex9yU8I.js";import"./useOsdkClient-6-yKY7Ze.js";import"./tick-B5OTJBKL.js";import"./DropdownField-BKTYqznm.js";import"./isEqual-BKZ-Fetd.js";import"./withOsdkMetrics-6BIUOFhO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
