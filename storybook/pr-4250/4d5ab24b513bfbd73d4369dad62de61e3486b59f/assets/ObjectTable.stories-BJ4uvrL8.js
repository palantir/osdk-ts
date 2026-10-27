import{j as i}from"./iframe-COVETwhx.js";import{O as p}from"./object-table-COuU105Y.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DoBSpTz_.js";import"./preload-helper-B-xfSmD6.js";import"./Table-pwM_a1S-.js";import"./index-bOxlMW9W.js";import"./Dialog-DUCt0N-S.js";import"./cross-CCyLZ_a3.js";import"./svgIconContainer-gsbuNadi.js";import"./useBaseUiId-2z9ajXTy.js";import"./InternalBackdrop-BaZjvCUN.js";import"./composite-kZubSwMs.js";import"./index-SM4cV6TD.js";import"./index-BadFZGVY.js";import"./index-Dtx0mzcz.js";import"./useEventCallback-XIafyipZ.js";import"./SkeletonBar-CdNxN4hg.js";import"./LoadingCell-CyraqzVp.js";import"./ColumnConfigDialog-C42ZPsPz.js";import"./DraggableList-B2TOzbeH.js";import"./search-2wDgAEqi.js";import"./Input-DDxMXv2L.js";import"./useControlled-eVeEVm0U.js";import"./Button-D7hgHtqc.js";import"./small-cross-BfZtJMTE.js";import"./ActionButton-CWVjt9h4.js";import"./Checkbox-rFGnVT6O.js";import"./useValueChanged-D9aAEcAT.js";import"./CollapsiblePanel-DqoXoaOR.js";import"./MultiColumnSortDialog-CCxOq-4J.js";import"./MenuTrigger-D-v-XyV6.js";import"./CompositeItem-Dg_iEtAz.js";import"./ToolbarRootContext-ra_8dAxJ.js";import"./getDisabledMountTransitionStyles-Czfivuu1.js";import"./getPseudoElementBounds-DSG6kIql.js";import"./chevron-down-Kndiv9KN.js";import"./index-Qpmu02z_.js";import"./error-Dso-ncgj.js";import"./BaseCbacBanner-BdmB5LbT.js";import"./makeExternalStore-BjWwL6YG.js";import"./Tooltip-BPacsOBo.js";import"./PopoverPopup-DUufvOMw.js";import"./debounce-Dc_lQPIE.js";import"./useOsdkClient-DUa_DGnQ.js";import"./tick-C-EouHxY.js";import"./DropdownField-CgcUEzHA.js";import"./isEqual-dfhg-x8x.js";import"./withOsdkMetrics-DVwyRo2Q.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
