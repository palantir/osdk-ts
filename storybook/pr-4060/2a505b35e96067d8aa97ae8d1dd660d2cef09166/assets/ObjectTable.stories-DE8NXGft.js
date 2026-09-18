import{j as i}from"./iframe-DYP6I0EJ.js";import{O as p}from"./object-table-DMM2jzgg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-By8OMHuo.js";import"./preload-helper-sS4hYFkK.js";import"./Table-CuYv3cn2.js";import"./index-DIhwEquj.js";import"./Dialog-BjY_b077.js";import"./cross-bDPWwylA.js";import"./svgIconContainer-C4jga87M.js";import"./useBaseUiId-BZiJrEE8.js";import"./InternalBackdrop-71TCmGDX.js";import"./composite-DQKMgq2L.js";import"./index-kgSrvS5D.js";import"./index-C2R1rTgL.js";import"./index-Bu9lWdWG.js";import"./useEventCallback-viQBOCoU.js";import"./SkeletonBar-BcB8RILE.js";import"./LoadingCell-BACnWh3V.js";import"./ColumnConfigDialog-12MNYR_s.js";import"./DraggableList-ka3cAseo.js";import"./search-DC-q2Fvd.js";import"./Input-CX9B7mOe.js";import"./useControlled-CBcSqYsQ.js";import"./Button-BBpZA8JE.js";import"./small-cross--hwGWXHG.js";import"./ActionButton-BWEQ465S.js";import"./Checkbox-C66Slb1i.js";import"./useValueChanged-DYyvPFZ9.js";import"./CollapsiblePanel-gA7_qpOX.js";import"./MultiColumnSortDialog--pqZCkrG.js";import"./MenuTrigger-DaJlolSj.js";import"./CompositeItem-BuWL3KPI.js";import"./ToolbarRootContext-6dERQM_o.js";import"./getDisabledMountTransitionStyles-_04rz-EH.js";import"./getPseudoElementBounds-pXf6ipeD.js";import"./chevron-down-DgAcZbyD.js";import"./index-Bbf985kl.js";import"./error-BJ0QSSt_.js";import"./BaseCbacBanner-Dh6gG5qi.js";import"./makeExternalStore-DN0LusY8.js";import"./Tooltip-BRru9_rR.js";import"./PopoverPopup-BtgbBgDL.js";import"./debounce-BaQbuarC.js";import"./useOsdkClient-Cplqkh8-.js";import"./tick-Clj_LCer.js";import"./DropdownField-CjaSoiXx.js";import"./isEqual-CZ5dkiZB.js";import"./withOsdkMetrics-1ciRu-eY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
