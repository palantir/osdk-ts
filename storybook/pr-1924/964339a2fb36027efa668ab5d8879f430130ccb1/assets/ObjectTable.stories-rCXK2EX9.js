import{j as i}from"./iframe-D0LlCScw.js";import{O as p}from"./object-table-COIfwPKf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BoBYGQaK.js";import"./preload-helper-BPYsHztA.js";import"./Table-CVrn8a7m.js";import"./index-R-OWCfkC.js";import"./Dialog-DHPBiuDP.js";import"./cross-BIKx7l1B.js";import"./svgIconContainer-CPd4FEGO.js";import"./useBaseUiId-Cnf8WH7W.js";import"./InternalBackdrop-DSzn_M6g.js";import"./composite-DawpNJ_k.js";import"./index-DXbsvYWy.js";import"./index-BZTOjdyb.js";import"./index-Dh6bu7y0.js";import"./useEventCallback-BHhry2Ze.js";import"./SkeletonBar-BM6j1C1a.js";import"./LoadingCell-4G6EJCyj.js";import"./ColumnConfigDialog-1N3jOgDU.js";import"./DraggableList-DX8ugLQU.js";import"./search-Dy9Bh6oJ.js";import"./Input-DguSmqlF.js";import"./useControlled-C-xRoLJo.js";import"./Button-Bfbc-efe.js";import"./small-cross-D12kpvdn.js";import"./ActionButton-CCgA1PS9.js";import"./Checkbox-DqcVMQmm.js";import"./useValueChanged-D4Cuolrk.js";import"./CollapsiblePanel-DGCQJ7r2.js";import"./MultiColumnSortDialog-6daUiyok.js";import"./MenuTrigger-bU6vvaQC.js";import"./CompositeItem-DSL5KLQJ.js";import"./ToolbarRootContext-DxaGXN87.js";import"./getDisabledMountTransitionStyles-DtmNom5N.js";import"./getPseudoElementBounds-lP1dSnSf.js";import"./chevron-down-D3xB8NyO.js";import"./index-Bynh9I8M.js";import"./error-g8Wu2PpH.js";import"./BaseCbacBanner-DPbFCEOT.js";import"./makeExternalStore-G-t7fMHO.js";import"./Tooltip-ozF9P0sc.js";import"./PopoverPopup-DPim281m.js";import"./debounce-BWX6LBdf.js";import"./useOsdkClient-BbcMY0OU.js";import"./tick-DOJuYt0r.js";import"./DropdownField-BsF9XJhY.js";import"./isEqual-DjcNAgH_.js";import"./withOsdkMetrics-Bwsdr4IU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
