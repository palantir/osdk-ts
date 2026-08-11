import{j as i}from"./iframe-Dz5rdWKc.js";import{O as p}from"./object-table-B2t2lye9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BiapNwBH.js";import"./preload-helper-XATaYvna.js";import"./Table-DGG580oZ.js";import"./index-CytlZwKK.js";import"./Dialog-0FDBmYfS.js";import"./cross-CWOW4qd9.js";import"./svgIconContainer-CUN1j48t.js";import"./useBaseUiId-CcJgBD_T.js";import"./InternalBackdrop-CIvTRqRL.js";import"./composite-uePQiAd3.js";import"./index-DbprldD0.js";import"./index-DwniMKUL.js";import"./index-BOSAzp12.js";import"./useEventCallback-w50J352W.js";import"./SkeletonBar-B734M0LM.js";import"./LoadingCell-Bv2ftvWI.js";import"./ColumnConfigDialog-C1tfFTej.js";import"./DraggableList-5iwPRV7s.js";import"./search-BFHO--qI.js";import"./Input-obGi4R-h.js";import"./useControlled-4Ksb8v8S.js";import"./isEqual-BZe_8M-T.js";import"./isObject-DVMtZYDp.js";import"./Button-Byc2y57h.js";import"./ActionButton-BHFskhzg.js";import"./Checkbox-Dh99OxeL.js";import"./useValueChanged-B4dQw5iP.js";import"./CollapsiblePanel-CvKAvnYp.js";import"./MultiColumnSortDialog-DNlQYhdv.js";import"./MenuTrigger-BpWiiVhn.js";import"./CompositeItem-C7V_Skuq.js";import"./ToolbarRootContext-MoW5PjEQ.js";import"./getDisabledMountTransitionStyles-xbZaHee-.js";import"./getPseudoElementBounds-BbNVJ4Mj.js";import"./chevron-down-DwfjrTJ-.js";import"./index-CEPBw93X.js";import"./error-CrVFNvEo.js";import"./BaseCbacBanner-Dm7GUcA8.js";import"./makeExternalStore-CHpDPlpc.js";import"./Tooltip-BvNkppRD.js";import"./PopoverPopup-BX_QYCS1.js";import"./toNumber-BG3B4_6W.js";import"./useOsdkClient-BeXjkR9z.js";import"./tick-CuiOgS51.js";import"./DropdownField-BaMjHWk4.js";import"./withOsdkMetrics-zHx2V0mr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
