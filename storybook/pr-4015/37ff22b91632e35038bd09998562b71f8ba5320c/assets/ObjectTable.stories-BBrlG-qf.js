import{j as i}from"./iframe-DuKb9b-g.js";import{O as p}from"./object-table-D_f3jEqw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C6yU0TNz.js";import"./preload-helper-CmBjm-d1.js";import"./Table-CelvBzgi.js";import"./index-CBTF18Y_.js";import"./Dialog-BItLkqX5.js";import"./cross-BuyNDB8o.js";import"./svgIconContainer-D2G78cDZ.js";import"./useBaseUiId-NQWDjIJs.js";import"./InternalBackdrop-D4gOUPe7.js";import"./composite-DGpno2Zs.js";import"./index-COA_z0C-.js";import"./index-rSrw9_A6.js";import"./index-LK-vvshS.js";import"./useEventCallback-Du_jiSTN.js";import"./SkeletonBar-CyJQaH3P.js";import"./LoadingCell-RsBbZKeg.js";import"./ColumnConfigDialog-BHzMjY3y.js";import"./DraggableList-OFpiB0Ur.js";import"./search-DorovZ71.js";import"./Input-Cn1-EvYg.js";import"./useControlled-Cq3GxJKq.js";import"./Button--z0-7-P6.js";import"./small-cross-XPwGc81k.js";import"./ActionButton-B90I1M0m.js";import"./Checkbox-DY6vacWn.js";import"./useValueChanged-B0eTT0HH.js";import"./CollapsiblePanel-BCVzQFnZ.js";import"./MultiColumnSortDialog-DVBISA0E.js";import"./MenuTrigger-DmALjKVQ.js";import"./CompositeItem-nEfjeVhf.js";import"./ToolbarRootContext-B06gfqsL.js";import"./getDisabledMountTransitionStyles-CE96oCFC.js";import"./getPseudoElementBounds-I2seTDJA.js";import"./chevron-down-Cn1BrU6q.js";import"./index-DYJuDcIp.js";import"./error-F4sFwWip.js";import"./BaseCbacBanner-C3rmTLBi.js";import"./makeExternalStore-Ch4HrWdd.js";import"./Tooltip-LmxDT9eD.js";import"./PopoverPopup-C0gNO46d.js";import"./debounce-BTQaBQTc.js";import"./useOsdkClient-3LBkaWIm.js";import"./tick-ozEvHoG_.js";import"./DropdownField-B1euX2XM.js";import"./isEqual-DOiyiefo.js";import"./withOsdkMetrics-HiGGTrX-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
