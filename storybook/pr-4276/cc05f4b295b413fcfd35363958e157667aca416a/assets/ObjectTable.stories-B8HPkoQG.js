import{j as i}from"./iframe-B2ls_m6L.js";import{O as p}from"./object-table-CLdWUbM7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dv8WwAw0.js";import"./preload-helper-DP2nAHeT.js";import"./Table-UvcN073C.js";import"./index-DcpRv5Au.js";import"./Dialog-BwkAAeQ-.js";import"./cross-DiYUblgV.js";import"./svgIconContainer-Dtr7_c7L.js";import"./useBaseUiId-D1As3N2D.js";import"./InternalBackdrop-poQ1Ks4a.js";import"./composite-nADOaRwJ.js";import"./index-HgFM_z-w.js";import"./index-BKdY56eR.js";import"./index-BFbPpLDJ.js";import"./useEventCallback-C_OLTNA8.js";import"./SkeletonBar-CDSwBps9.js";import"./LoadingCell-Bc890wP7.js";import"./ColumnConfigDialog-BCy_GDuN.js";import"./DraggableList-Dz-MKiiJ.js";import"./search-C0yxcI0O.js";import"./Input-Cxa2FMNZ.js";import"./useControlled-DyDb9EZF.js";import"./Button-DJwARfG7.js";import"./small-cross-BtkQ0vb4.js";import"./ActionButton-BnyLqoQD.js";import"./Checkbox-BaAquE_6.js";import"./useValueChanged-BAEr9orZ.js";import"./CollapsiblePanel-CggaZMfT.js";import"./MultiColumnSortDialog-BLuJj5S7.js";import"./MenuTrigger-jLNdpDEJ.js";import"./CompositeItem-uAkHZ6IU.js";import"./ToolbarRootContext-BCVvVfQ9.js";import"./getDisabledMountTransitionStyles-7kyYRvXc.js";import"./getPseudoElementBounds-BzQUOkaY.js";import"./chevron-down-CD5bKFpW.js";import"./index-C3iibYgA.js";import"./error-xfz1itQC.js";import"./BaseCbacBanner-CYTc_peL.js";import"./makeExternalStore-Dex4IqlO.js";import"./Tooltip-7yrVH1gX.js";import"./isObject-CKlJzEzc.js";import"./debounce-DfStzg0U.js";import"./useOsdkClient-ODHX8UXJ.js";import"./tick-Dp72_Noz.js";import"./DropdownField-BFaK5X74.js";import"./isEqual-CY4vxoGb.js";import"./_baseIsEqual-DHT5s9nl.js";import"./withOsdkMetrics-6BgTImPT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
