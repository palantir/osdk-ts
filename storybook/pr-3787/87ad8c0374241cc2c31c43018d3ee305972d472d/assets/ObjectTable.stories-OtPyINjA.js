import{j as i}from"./iframe-TwL9Rdcu.js";import{O as p}from"./object-table-DOmpi9ec.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D2WcaMFi.js";import"./preload-helper-Dtd1x7f0.js";import"./Table-D157Dw9p.js";import"./index-B37Vkn7p.js";import"./Dialog-BPOvzZvq.js";import"./cross-DEXmuJ6S.js";import"./svgIconContainer-Cn5jlibP.js";import"./useBaseUiId-CA6_Pr4t.js";import"./InternalBackdrop-CxDNG576.js";import"./composite-Aws6OWjh.js";import"./index-DiSmLK3F.js";import"./index-BzhMbvob.js";import"./index-Oca42Qm_.js";import"./useEventCallback-DT0sCX5x.js";import"./SkeletonBar-CSWMLadG.js";import"./LoadingCell-Ck4mXGmE.js";import"./ColumnConfigDialog-DqZvcT84.js";import"./DraggableList-DXDZhqMb.js";import"./search-M01QHkXX.js";import"./Input-D1m7PFdq.js";import"./useControlled-Ee5pocfV.js";import"./isEqual-S7BEPodu.js";import"./isObject-D04Zr0Ej.js";import"./Button-93iZ1g0B.js";import"./ActionButton-Bl3Bz7Yc.js";import"./Checkbox-7MnoqMPv.js";import"./useValueChanged-BMITbowe.js";import"./CollapsiblePanel-GG2tw--5.js";import"./MultiColumnSortDialog-jEPlSRTE.js";import"./MenuTrigger-UQ3lmTDq.js";import"./CompositeItem-DDQiXXk3.js";import"./ToolbarRootContext-3L1WJeQb.js";import"./getDisabledMountTransitionStyles-CnFJwfEc.js";import"./getPseudoElementBounds-DtKiTUz6.js";import"./chevron-down-CfEskrRU.js";import"./index-ClR5kgm1.js";import"./error-3oWabdkP.js";import"./BaseCbacBanner-O7P0tRBU.js";import"./makeExternalStore-BX0FhRjZ.js";import"./Tooltip-BKi7jcww.js";import"./PopoverPopup-DMOPdfl-.js";import"./toNumber-BZugkDQH.js";import"./useOsdkClient-BcYS5GMf.js";import"./tick-vtzmVJ8o.js";import"./DropdownField-CyncprO9.js";import"./withOsdkMetrics-DF9gmOzI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
