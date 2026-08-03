import{j as i}from"./iframe-aLJ4vB0x.js";import{O as p}from"./object-table-kNLX58Gy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bcpo9HZO.js";import"./preload-helper-B5sUmCwj.js";import"./Table-pvJic3D7.js";import"./index-DKvaEXHI.js";import"./Dialog-DqgHKDs7.js";import"./cross-BQrUWsOd.js";import"./svgIconContainer-873Hh3eJ.js";import"./useBaseUiId-BuIqAuhc.js";import"./InternalBackdrop-C8VDRsX0.js";import"./composite-D_Mqvp3m.js";import"./index-BkKRshEc.js";import"./index-CUJ1tB6w.js";import"./index-Ci1S4s1h.js";import"./useEventCallback-CRlpf0-k.js";import"./SkeletonBar-BpZFoT3c.js";import"./LoadingCell--ETL430z.js";import"./ColumnConfigDialog-BAZiSjIN.js";import"./DraggableList-Q8dBjOLy.js";import"./search-D07Efajj.js";import"./Input-DJfYdaTn.js";import"./useControlled-C7kgsGsI.js";import"./isEqual-CHmSc8tc.js";import"./isObject-QF1hCGtq.js";import"./Button-lNsDPS4F.js";import"./ActionButton-BlHGSvPb.js";import"./Checkbox-Dvuuxnei.js";import"./useValueChanged-CBTQynAn.js";import"./CollapsiblePanel-B6brJd3g.js";import"./MultiColumnSortDialog-DAzfgCd9.js";import"./MenuTrigger-DFNrJqmt.js";import"./CompositeItem-C0_6gg2t.js";import"./ToolbarRootContext-B7yBHeEe.js";import"./getDisabledMountTransitionStyles-BP0yyuUf.js";import"./getPseudoElementBounds-B9LyUeou.js";import"./chevron-down-D9U3DaSB.js";import"./index-xX1_mGTA.js";import"./error-BpshgP1A.js";import"./BaseCbacBanner-GQbEg4Hb.js";import"./makeExternalStore-CvU_QCPk.js";import"./Tooltip-CyXVTRKz.js";import"./PopoverPopup-CqmKqcO2.js";import"./toNumber-D-Bxva2b.js";import"./useOsdkClient-C9KBHoe2.js";import"./tick-C4oNvW0d.js";import"./DropdownField-CJ9WQEN_.js";import"./withOsdkMetrics-BqZomkcB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
