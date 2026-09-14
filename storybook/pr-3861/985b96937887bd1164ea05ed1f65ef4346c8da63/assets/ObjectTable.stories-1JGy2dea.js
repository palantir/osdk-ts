import{j as i}from"./iframe-DIZ-Bu8w.js";import{O as p}from"./object-table-DXEf7QZp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DFMba4S8.js";import"./preload-helper-BCeaJvSh.js";import"./Table-CpSGMOkR.js";import"./index-U9LN2Bz3.js";import"./Dialog-DRlRU3T4.js";import"./cross-DxgTLWiz.js";import"./svgIconContainer-IKodGSm3.js";import"./useBaseUiId-CBNbS5zc.js";import"./InternalBackdrop-yM8Okk6y.js";import"./composite-g9iDGAQe.js";import"./index-C_o4DvqR.js";import"./index-C_qvm4WD.js";import"./index-gGnzolpv.js";import"./useEventCallback-BDzfSq7p.js";import"./SkeletonBar-C61w2HiA.js";import"./LoadingCell-DjxUE7vP.js";import"./ColumnConfigDialog-CK0v3LgS.js";import"./DraggableList-DzoglXEc.js";import"./search-DmtLA8wB.js";import"./Input-CIeGAlok.js";import"./useControlled-CLVHgJsp.js";import"./Button-B1ALhdFr.js";import"./small-cross-CRaqECGa.js";import"./ActionButton-Dlu16gsr.js";import"./Checkbox-YrU0nqcl.js";import"./useValueChanged-CGUyZDFO.js";import"./CollapsiblePanel-DPTmyULg.js";import"./MultiColumnSortDialog-DqqrwBbG.js";import"./MenuTrigger-DEfP1V7x.js";import"./CompositeItem-BtZ6x-gO.js";import"./ToolbarRootContext-BVSgixiH.js";import"./getDisabledMountTransitionStyles-CQ2DPXAp.js";import"./getPseudoElementBounds-BUnDKKdE.js";import"./chevron-down-DSfB9wHE.js";import"./index-CkInxViu.js";import"./error-uSSd40F1.js";import"./BaseCbacBanner-Qx6E67Bb.js";import"./makeExternalStore-DE0i2YSI.js";import"./Tooltip-BMr-3bqI.js";import"./PopoverPopup-DYZGNom1.js";import"./debounce-C3kkqtjg.js";import"./useOsdkClient-BScEIiCr.js";import"./tick-BgvY-8AZ.js";import"./DropdownField-qfJaQs7S.js";import"./isEqual-luc_zc0m.js";import"./withOsdkMetrics-CD3VlAOg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
