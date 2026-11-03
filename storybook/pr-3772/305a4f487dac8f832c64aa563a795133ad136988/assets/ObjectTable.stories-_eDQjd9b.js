import{j as i}from"./iframe-vcLMjbea.js";import{O as p}from"./object-table-BfvzlUao.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B4JZLZpg.js";import"./preload-helper-RU1OdimD.js";import"./Table-CSY55iFj.js";import"./index-CG3KkM6y.js";import"./Dialog-Xcbat__-.js";import"./cross-D-EFak3i.js";import"./svgIconContainer-Gicaxf1s.js";import"./useBaseUiId-DnJ4weT2.js";import"./InternalBackdrop-HVYVXyCg.js";import"./composite-CT0DZWF7.js";import"./index-BIHIRrhw.js";import"./index-CU58PLdw.js";import"./index-NU5zO8vj.js";import"./useEventCallback-D6NEmK7_.js";import"./SkeletonBar-sPDIVMCS.js";import"./LoadingCell-CT123iLI.js";import"./ColumnConfigDialog-DZg6qXzG.js";import"./DraggableList-DZ2o5zTG.js";import"./search-3IXTuiXl.js";import"./Input-B07SGOjF.js";import"./useControlled-BXjUIo-l.js";import"./Button-DY9kTYfp.js";import"./small-cross-Bp4GK8nv.js";import"./ActionButton-BgFvfHoG.js";import"./Checkbox-BwhD0opN.js";import"./useValueChanged-Fi604hGA.js";import"./CollapsiblePanel-DiUY56Er.js";import"./MultiColumnSortDialog-o2Oosgua.js";import"./MenuTrigger-CNqmUXY3.js";import"./CompositeItem-BN5pExu_.js";import"./ToolbarRootContext-6uR7xL1n.js";import"./getDisabledMountTransitionStyles-CMJs3FOY.js";import"./getPseudoElementBounds-CVVRvaQ5.js";import"./chevron-down-CCBKa1Fl.js";import"./index-DM0ijL_x.js";import"./error-CrN3ijuU.js";import"./BaseCbacBanner-CxJGL3mi.js";import"./makeExternalStore-SiSiEnyI.js";import"./Tooltip-bH_4JHn2.js";import"./PopoverPopup-Bma8tsO9.js";import"./debounce-N0qJ7Xu9.js";import"./useOsdkClient-DE3ZbsH3.js";import"./tick-DMkp_lOe.js";import"./DropdownField-DHSmAbjS.js";import"./isEqual-C1DaMkeA.js";import"./withOsdkMetrics-BcVOHfX1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
