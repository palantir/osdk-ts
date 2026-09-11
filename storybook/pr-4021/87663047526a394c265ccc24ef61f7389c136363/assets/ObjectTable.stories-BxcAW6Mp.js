import{j as i}from"./iframe-CC13kVkc.js";import{O as p}from"./object-table-BoQNsJEO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CSOuQhXo.js";import"./preload-helper-iiwGnqeP.js";import"./Table-CUY0THro.js";import"./index-DU2P82bW.js";import"./Dialog-Cl4AcAGv.js";import"./cross-Gw99IDXX.js";import"./svgIconContainer-BM4AiPUS.js";import"./useBaseUiId-HgrihVGX.js";import"./InternalBackdrop-LVRDcyBz.js";import"./composite-CQT3GPGa.js";import"./index-C0gqvA1S.js";import"./index-DWN_AYu3.js";import"./index-CZ_sbyW4.js";import"./useEventCallback-Dzvd6DP5.js";import"./SkeletonBar-CqLQslyN.js";import"./LoadingCell-ZQEvmqLg.js";import"./ColumnConfigDialog-VYNi19lW.js";import"./DraggableList-Ca43qavx.js";import"./search-DATCmuXl.js";import"./Input-B8esvYJ8.js";import"./useControlled-C8Ss_1q9.js";import"./Button-DChBnEps.js";import"./small-cross-ChcGFzGy.js";import"./ActionButton-D0sOWk1d.js";import"./Checkbox-CUTYqxzh.js";import"./useValueChanged-B8UU_UBm.js";import"./CollapsiblePanel-M2FwY9nP.js";import"./MultiColumnSortDialog-BuKMp48F.js";import"./MenuTrigger-DHFrirSL.js";import"./CompositeItem-DZfCHwau.js";import"./ToolbarRootContext-CWcw0hmq.js";import"./getDisabledMountTransitionStyles-qFjzV3aO.js";import"./getPseudoElementBounds-D0x7-dwB.js";import"./chevron-down-SXnOgnm5.js";import"./index-BbGmio58.js";import"./error-C04PUB1J.js";import"./BaseCbacBanner-CEdNT__P.js";import"./makeExternalStore-2iYjMQbd.js";import"./Tooltip-C0FVSqb3.js";import"./PopoverPopup-CH4QvDfI.js";import"./debounce-B0ThbaZi.js";import"./useOsdkClient-C-mmpbXU.js";import"./tick-BfjgS0G2.js";import"./DropdownField-3R-_B0eM.js";import"./isEqual-CFkoNCQV.js";import"./withOsdkMetrics-DYDVQvXv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
