import{j as i}from"./iframe-B41lgdKN.js";import{O as p}from"./object-table-CmxWLL0B.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dqib5iI6.js";import"./preload-helper-DI5m88JW.js";import"./Table-Co7hecY_.js";import"./index-C2q613GL.js";import"./Dialog-CWeVqIwm.js";import"./cross-C9BOtq1y.js";import"./svgIconContainer-D7Eue1ZZ.js";import"./useBaseUiId-BgB3Fx_y.js";import"./InternalBackdrop-BILEvSbn.js";import"./composite-B54UYmeO.js";import"./index-D_IcPDjf.js";import"./index-Cujrcm2-.js";import"./index-DdsQXbay.js";import"./useEventCallback-xWqpVog3.js";import"./SkeletonBar-CGdxBAF7.js";import"./LoadingCell-jbi8AJ8l.js";import"./ColumnConfigDialog-CL5y9Q7l.js";import"./DraggableList-D9UwDPNT.js";import"./search-D5xcli0X.js";import"./Input-C5V0yZmk.js";import"./useControlled-COiD_eR7.js";import"./Button-CLPb2Ul9.js";import"./small-cross-BiIUW-iP.js";import"./ActionButton-BUTqoq-Q.js";import"./Checkbox-B4SrzSIC.js";import"./useValueChanged-uNqrEDBx.js";import"./CollapsiblePanel-m4kdZM0i.js";import"./MultiColumnSortDialog-BGl8Ae1h.js";import"./MenuTrigger-0SMi1Bkm.js";import"./CompositeItem-DKeB6UbW.js";import"./ToolbarRootContext-DaqyENip.js";import"./getDisabledMountTransitionStyles-vQmeQXHd.js";import"./getPseudoElementBounds-S244zxdS.js";import"./chevron-down-DPEakPZ3.js";import"./index-B5Wpr3Nx.js";import"./error-DxQUrNdP.js";import"./BaseCbacBanner-CYN7YaF7.js";import"./makeExternalStore-BkjE2Bfi.js";import"./Tooltip-9yKLS0Jj.js";import"./PopoverPopup-DAEUfrcq.js";import"./debounce-UdAL_ybq.js";import"./useOsdkClient-D00y5DQT.js";import"./tick-jRfkJ3jM.js";import"./DropdownField-BKkvVjBl.js";import"./isEqual-BoLhe-YY.js";import"./withOsdkMetrics-BJYPVZ1i.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
