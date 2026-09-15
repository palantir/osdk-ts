import{j as i}from"./iframe-DSG-Gahl.js";import{O as p}from"./object-table-CP439Oap.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-1vKpyZXy.js";import"./preload-helper-DD3-CUB8.js";import"./Table-EV18WJO-.js";import"./index-4o4hAzg4.js";import"./Dialog-DrDKTUSB.js";import"./cross-DzIvG2rT.js";import"./svgIconContainer-CkL2iDb7.js";import"./useBaseUiId-Br7wSVRu.js";import"./InternalBackdrop-CYQOhGhx.js";import"./composite-WUh_Mv2U.js";import"./index-BRRswYIi.js";import"./index-CphGNIJN.js";import"./index-XAVsYiFD.js";import"./useEventCallback-QoQzxgWp.js";import"./SkeletonBar-D83dsI7U.js";import"./LoadingCell-csM7bcRN.js";import"./ColumnConfigDialog-Ohev5im7.js";import"./DraggableList-CtWzFhxX.js";import"./search-Cif2ZQOV.js";import"./Input-DBWCKen9.js";import"./useControlled-BS70aI_K.js";import"./Button-DCXgUJWi.js";import"./small-cross-CqhPSG41.js";import"./ActionButton-CuCH1v84.js";import"./Checkbox-BMKyb1ND.js";import"./useValueChanged-B-UgLZ_R.js";import"./CollapsiblePanel-VPfhnzag.js";import"./MultiColumnSortDialog-DVhDYf3L.js";import"./MenuTrigger-Qvpr5ZEC.js";import"./CompositeItem-spSeCvAe.js";import"./ToolbarRootContext-B8oHTFsm.js";import"./getDisabledMountTransitionStyles-W0Uyfg0E.js";import"./getPseudoElementBounds-DDNjc80p.js";import"./chevron-down-CBanfjsL.js";import"./index-DaTFX0DM.js";import"./error-DgA6RGKH.js";import"./BaseCbacBanner-1IdyAyi-.js";import"./makeExternalStore-eZw-8kVK.js";import"./Tooltip-Ci09cpDJ.js";import"./PopoverPopup-B_5MQfps.js";import"./debounce-MyXx4KSr.js";import"./useOsdkClient-0TCUTiK2.js";import"./tick-DEJdcIdx.js";import"./DropdownField-CjqZMfYC.js";import"./isEqual-Bvjp7-nb.js";import"./withOsdkMetrics-CBCC75vt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
