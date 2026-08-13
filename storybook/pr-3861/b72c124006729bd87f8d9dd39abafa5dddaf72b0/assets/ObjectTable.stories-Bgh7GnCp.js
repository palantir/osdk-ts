import{j as i}from"./iframe-CrdYfz1j.js";import{O as p}from"./object-table-DHo6Bu71.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BJr7-hIx.js";import"./preload-helper-BKATmCzL.js";import"./Table-Bp75n4mb.js";import"./index-DGf5UtC0.js";import"./Dialog-BNP-wm6l.js";import"./cross-CNNELhu-.js";import"./svgIconContainer-Tyi6-qoG.js";import"./useBaseUiId-dMQXpX2_.js";import"./InternalBackdrop-MxxDFkud.js";import"./composite-BQeUw1C5.js";import"./index-Bo5TPIYo.js";import"./index-2NC_6Tgs.js";import"./index-BV-m61ut.js";import"./useEventCallback-xVgMH8jq.js";import"./SkeletonBar-ByE7-9ZL.js";import"./LoadingCell-CInqLWbH.js";import"./ColumnConfigDialog-lcdEo0kN.js";import"./DraggableList-EsseXW8w.js";import"./search-CKLyWx-O.js";import"./Input-D68UoCnN.js";import"./useControlled-B-uObzoi.js";import"./Button-CchJ5cyG.js";import"./small-cross-CPhowe_e.js";import"./ActionButton-C2hPv--S.js";import"./Checkbox-CnESWY0h.js";import"./useValueChanged-C-ltvQdt.js";import"./CollapsiblePanel-DuQ0C_fv.js";import"./MultiColumnSortDialog-Cg_igUeZ.js";import"./MenuTrigger-BzQkxt2t.js";import"./CompositeItem-BBlnE76H.js";import"./ToolbarRootContext-C55ZrIvq.js";import"./getDisabledMountTransitionStyles-C4cYowrJ.js";import"./getPseudoElementBounds-BsSFA3pP.js";import"./chevron-down-BTPbSLrU.js";import"./index-CNhI-fgu.js";import"./error-d1zfkTvI.js";import"./BaseCbacBanner-DAQsf-Py.js";import"./makeExternalStore-BxvGt8fM.js";import"./Tooltip-B9Y-ls9x.js";import"./PopoverPopup-Cn_7Vy-e.js";import"./toNumber-BoMSplVD.js";import"./useOsdkClient-BFBvlRT_.js";import"./tick-CQsTpN7q.js";import"./DropdownField-D51Dua_3.js";import"./withOsdkMetrics-DAT7SN5n.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
