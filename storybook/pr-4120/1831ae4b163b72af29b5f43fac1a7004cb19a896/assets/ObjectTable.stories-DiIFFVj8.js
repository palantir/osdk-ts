import{j as i}from"./iframe-BiR0bSaX.js";import{O as p}from"./object-table-DsbavqDt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-oCDzg5xZ.js";import"./preload-helper-CREsIwfv.js";import"./Table-B8n6aAme.js";import"./index-D0Rro4ck.js";import"./Dialog-Dp9jK4f-.js";import"./cross-gKG73r0q.js";import"./svgIconContainer-DdJYmAvv.js";import"./useBaseUiId-D3ocUoYR.js";import"./InternalBackdrop-D6vDmGzB.js";import"./composite-Cg5vG0V3.js";import"./index-CwYWk3f5.js";import"./index-CDTZ5otF.js";import"./index-zHT7Hyt8.js";import"./useEventCallback-BeraWIcy.js";import"./SkeletonBar-CM8I5OIh.js";import"./LoadingCell-BYFqkMG0.js";import"./ColumnConfigDialog-cXdYH0RF.js";import"./DraggableList-B_QC1B5x.js";import"./search-BVH0nxuW.js";import"./Input-CR7mkMB4.js";import"./useControlled-BCuMNdH3.js";import"./Button-BjLfCn0d.js";import"./small-cross-DYB9MOPk.js";import"./ActionButton-CLSAI2kW.js";import"./Checkbox-BFjDPznL.js";import"./useValueChanged-vxARVLtE.js";import"./CollapsiblePanel-d6aPXtM4.js";import"./MultiColumnSortDialog-CUpLWOUw.js";import"./MenuTrigger-QyLFHO-w.js";import"./CompositeItem-yCWRfwkd.js";import"./ToolbarRootContext-DZbYzNul.js";import"./getDisabledMountTransitionStyles-X1jqNQgo.js";import"./getPseudoElementBounds-BKmEUxkJ.js";import"./chevron-down-wSopSebG.js";import"./index-Pp8hdIUW.js";import"./error-DI1HaZkw.js";import"./BaseCbacBanner-CpKCOvH6.js";import"./makeExternalStore-8TAGYWzx.js";import"./Tooltip-4v0newPD.js";import"./PopoverPopup-By__3K0-.js";import"./debounce-BGMgfz2I.js";import"./useOsdkClient-D2ZfX5sU.js";import"./tick-CS8KJb9P.js";import"./DropdownField-B2dUQyL4.js";import"./isEqual-39wjEv2i.js";import"./withOsdkMetrics-Ft25XtI9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
