import{j as i}from"./iframe-BpcZw0Qh.js";import{O as p}from"./object-table-DUmT7cvP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ChnAuK3k.js";import"./preload-helper-bs_ZWCVp.js";import"./Table-s-iRKnNU.js";import"./index-RyqdaqZt.js";import"./Dialog-C1FgKXrl.js";import"./cross-BQZa2Kkg.js";import"./svgIconContainer-B6eNnREq.js";import"./useBaseUiId-BsFMaRmq.js";import"./InternalBackdrop-CephDmCg.js";import"./composite-b_Vir_Qy.js";import"./index-j_Bq1Wxb.js";import"./index-hOxH3DWt.js";import"./index-9jDzRHbg.js";import"./useEventCallback-Dyo7s63d.js";import"./SkeletonBar-CFFQOHPZ.js";import"./LoadingCell-D1RU1IJM.js";import"./ColumnConfigDialog-BR1gNZ0z.js";import"./DraggableList-DwApawfg.js";import"./search-C5aLdI-z.js";import"./Input-B-pxSN65.js";import"./useControlled-BaPgI88u.js";import"./Button-xX1VEK25.js";import"./small-cross-B0G2BYVi.js";import"./ActionButton-CSQPpyYl.js";import"./Checkbox-D3OGLlT9.js";import"./useValueChanged-DyTrIZ4q.js";import"./CollapsiblePanel-BGTJ0O0p.js";import"./MultiColumnSortDialog-Cl67X5Ew.js";import"./MenuTrigger-toVLb17l.js";import"./CompositeItem-CiXh4i5Q.js";import"./ToolbarRootContext-Bafsun3r.js";import"./getDisabledMountTransitionStyles-DAuYWGeR.js";import"./getPseudoElementBounds-CMoxeRLZ.js";import"./chevron-down-0qsj7SKJ.js";import"./index-BvmVuSqJ.js";import"./error-DJy30QKE.js";import"./BaseCbacBanner-BbbKJkgD.js";import"./makeExternalStore-vOLbyGHJ.js";import"./Tooltip-CrVqygHA.js";import"./PopoverPopup-CiGvhW0c.js";import"./debounce-BUHFTaie.js";import"./useOsdkClient-BPiM2Ufk.js";import"./tick-BLie4KaX.js";import"./DropdownField-BY-KWr1H.js";import"./isEqual-B9mRJgu4.js";import"./withOsdkMetrics-OlYBoQiq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
