import{j as i}from"./iframe-DrnKYwzt.js";import{O as p}from"./object-table-B4WCOvbA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CzO2QyCQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Dd5bbgTK.js";import"./index-DPIZfSwK.js";import"./Dialog-DVFQmxM_.js";import"./cross-DXIDkMuC.js";import"./svgIconContainer-DaVnGh9c.js";import"./useBaseUiId-CFsS7qRQ.js";import"./InternalBackdrop-DfWfg3ug.js";import"./composite-CCKcLmMF.js";import"./index-B5y8rxCa.js";import"./index-CiYDc6_L.js";import"./index-Bisa-WXs.js";import"./useEventCallback-B-Wg4m7c.js";import"./SkeletonBar-Cc2Dg58p.js";import"./LoadingCell-C4YHX9fn.js";import"./ColumnConfigDialog-Df86GpYG.js";import"./DraggableList-CH2Ns8QE.js";import"./search-CLh-nr8U.js";import"./Input-Bed63vhv.js";import"./useControlled-CTk87t76.js";import"./Button-QrXAKlJD.js";import"./small-cross-BLp7dord.js";import"./ActionButton-DnesRqE0.js";import"./Checkbox-C_Bhd5c0.js";import"./useValueChanged-DZ_zqBSU.js";import"./CollapsiblePanel-B6RPHT_f.js";import"./MultiColumnSortDialog-wpAUedQ9.js";import"./MenuTrigger-DUsLBEvk.js";import"./CompositeItem-DupeSBp8.js";import"./ToolbarRootContext-D8ABn96Q.js";import"./getDisabledMountTransitionStyles-Bl-wnC8C.js";import"./getPseudoElementBounds-xbPRU0lb.js";import"./chevron-down-BY9VCrZu.js";import"./index-7JqWaY13.js";import"./error-Cd40ldoN.js";import"./BaseCbacBanner-B6pNmjKQ.js";import"./makeExternalStore-DWwwitH0.js";import"./Tooltip-CUvdbu8d.js";import"./PopoverPopup-6Vyawomv.js";import"./debounce-B8UVLwl7.js";import"./useOsdkClient-BVIFxFY0.js";import"./tick-DGaDc00O.js";import"./DropdownField-BYEnn1vN.js";import"./isEqual-CBKxto0y.js";import"./withOsdkMetrics-CulCESkd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
