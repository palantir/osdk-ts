import{j as i}from"./iframe-B89B5CWM.js";import{O as p}from"./object-table-TjXxeS7e.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-zztWEQZ2.js";import"./preload-helper-BQ99I6nt.js";import"./Table-aohPUUE9.js";import"./index-D9SW0Yle.js";import"./Dialog-CMpT43wb.js";import"./cross-BbpWCkxQ.js";import"./svgIconContainer-ChPhhCD3.js";import"./useBaseUiId-DtDRBSq4.js";import"./InternalBackdrop-COfUIr0S.js";import"./composite-B50sO1rH.js";import"./index-BWtJkqTj.js";import"./index-m1HPcpqW.js";import"./index-DbCSIb3h.js";import"./useEventCallback-HaOgpImO.js";import"./SkeletonBar-pSM_YdGu.js";import"./LoadingCell-DduVSPo-.js";import"./ColumnConfigDialog-fER75DAD.js";import"./DraggableList-DbtN4p1h.js";import"./search-BIvcGDFg.js";import"./Input-BTItB3zo.js";import"./useControlled-oTZtcuwA.js";import"./Button-Y1tATrz0.js";import"./small-cross-C8bFb-MH.js";import"./ActionButton-6QvyZFZ4.js";import"./Checkbox-BFETg0bp.js";import"./useValueChanged-DITF5IQQ.js";import"./CollapsiblePanel-CfrpUeu3.js";import"./MultiColumnSortDialog-Cg_KezFK.js";import"./MenuTrigger-B-fi0xS8.js";import"./CompositeItem-CiUmrhhL.js";import"./ToolbarRootContext-BUhhyvqJ.js";import"./getDisabledMountTransitionStyles-CtMZVl1t.js";import"./getPseudoElementBounds-CKOvD078.js";import"./chevron-down-C8YyWC3O.js";import"./index-B5gePnV1.js";import"./error-yAZoJobu.js";import"./BaseCbacBanner-lKvwV7ea.js";import"./makeExternalStore-Dng9Dmlv.js";import"./Tooltip-DCjqoaml.js";import"./PopoverPopup-DefmT2bE.js";import"./debounce-Dl_IbEsP.js";import"./useOsdkClient-uulAZQLf.js";import"./tick-D72Jsudk.js";import"./DropdownField-Cq54mmNu.js";import"./isEqual-DhYcQb9B.js";import"./withOsdkMetrics-Cct9f3WN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
