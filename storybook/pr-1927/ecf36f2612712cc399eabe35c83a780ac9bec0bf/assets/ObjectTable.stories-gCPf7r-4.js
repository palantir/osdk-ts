import{j as i}from"./iframe-B2Hbgk_7.js";import{O as p}from"./object-table-TTmYKvxF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CBpRyAEn.js";import"./preload-helper-BIOghnjg.js";import"./Table-BobHU4WV.js";import"./index-DrosstMD.js";import"./Dialog-nRqw2oyt.js";import"./cross-CMOlEEKU.js";import"./svgIconContainer-kTH1S9JE.js";import"./useBaseUiId-El1KPGB5.js";import"./InternalBackdrop-ZJrbhxPy.js";import"./composite-C00UUeG4.js";import"./index-BElQuRwB.js";import"./index-y9S8xmis.js";import"./index-DRG_YeJ3.js";import"./useEventCallback-DLOU8qGC.js";import"./SkeletonBar-gVSZNwCd.js";import"./LoadingCell-NcPon7Hr.js";import"./ColumnConfigDialog-DZJPchLf.js";import"./DraggableList-C_pfPm07.js";import"./search-Dge6vq_P.js";import"./Input-C7VTBgbc.js";import"./useControlled-Y-hNBLuR.js";import"./Button-ChD0uv2M.js";import"./small-cross-vAFwZtSV.js";import"./ActionButton-DLmadiS3.js";import"./Checkbox-D_5Ownj5.js";import"./useValueChanged-Dpnjqk8r.js";import"./CollapsiblePanel-pfoTWKHp.js";import"./MultiColumnSortDialog-P02OhBBe.js";import"./MenuTrigger-DQPx8r-g.js";import"./CompositeItem-CUZ4C8IA.js";import"./ToolbarRootContext-deiGRCW1.js";import"./getDisabledMountTransitionStyles-DrqZTZzZ.js";import"./getPseudoElementBounds-BgsAZpVp.js";import"./chevron-down-BIdOqTL3.js";import"./index-BZMUxiku.js";import"./error-CG38qSaD.js";import"./BaseCbacBanner-5led0h6U.js";import"./makeExternalStore-BIZDH2fs.js";import"./Tooltip-COASp5Bq.js";import"./PopoverPopup-Cp5uUE9r.js";import"./debounce-Xb7mC0HA.js";import"./useOsdkClient--TStUSqZ.js";import"./tick-7D0Lucc7.js";import"./DropdownField-DIFmpXyB.js";import"./isEqual-CbYfRPeI.js";import"./withOsdkMetrics-Cum7Zc0o.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
