import{j as i}from"./iframe-DgffzXcd.js";import{O as p}from"./object-table-fY9Xd0yZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BZWJMl3g.js";import"./preload-helper-cnms5IGS.js";import"./Table-CzDvDm7i.js";import"./index-BBLuu-Hq.js";import"./Dialog-BCwFL75a.js";import"./cross-BSsj-b40.js";import"./svgIconContainer-Blhk3Pl5.js";import"./useBaseUiId-D8q2NPVv.js";import"./InternalBackdrop-Bgldltbx.js";import"./composite-CF6w6iAh.js";import"./index-CAwd0aO9.js";import"./index-CeFEKlyx.js";import"./index-Cef6tpmG.js";import"./useEventCallback-DtRRBbn7.js";import"./SkeletonBar-CE1Y87-p.js";import"./LoadingCell-CsHmwUPd.js";import"./ColumnConfigDialog-astW80O7.js";import"./DraggableList-B1uaj-eR.js";import"./search-CJlxOI-X.js";import"./Input-c6SLv_Xy.js";import"./useControlled-BV_EXpzJ.js";import"./Button-UP0puh42.js";import"./small-cross-BBQkhsLR.js";import"./ActionButton-BaBnxcfR.js";import"./Checkbox-RB80j2cY.js";import"./useValueChanged-aTAAjdkj.js";import"./CollapsiblePanel-DXdXfeG6.js";import"./MultiColumnSortDialog-DDvpuTsH.js";import"./MenuTrigger-DCg3dPT6.js";import"./CompositeItem-BH2gdPXz.js";import"./ToolbarRootContext-DEjBOujG.js";import"./getDisabledMountTransitionStyles-Db73lXfO.js";import"./getPseudoElementBounds-DD-pb8mO.js";import"./chevron-down-B-BBWbod.js";import"./index-AOiW_Fy4.js";import"./error-C62WbJ6c.js";import"./BaseCbacBanner-tjiO2qm2.js";import"./makeExternalStore-FJNApXaM.js";import"./Tooltip-Ddt-e1A4.js";import"./PopoverPopup-YsjB_oA6.js";import"./debounce-KT7GVLZu.js";import"./useOsdkClient-DKu9s4PU.js";import"./tick-DXpn86OC.js";import"./DropdownField-FoaA7AiA.js";import"./isEqual-XaPl52Ec.js";import"./withOsdkMetrics-BMLt42BN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
