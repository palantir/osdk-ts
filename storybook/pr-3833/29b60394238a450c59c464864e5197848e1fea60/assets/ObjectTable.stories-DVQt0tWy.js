import{j as i}from"./iframe-DVYnRpdj.js";import{O as p}from"./object-table-D2LKbGoh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BXL7w_qs.js";import"./preload-helper-jWAjn0tL.js";import"./Table-Dxj1ILvb.js";import"./index-CH1L1VNU.js";import"./Dialog-CWjOSvXy.js";import"./cross-B9-dwz-Y.js";import"./svgIconContainer-CTL4p5cf.js";import"./useBaseUiId-BwB1POS7.js";import"./InternalBackdrop-N9SofBTy.js";import"./composite-C4ay5osQ.js";import"./index-CNxR8hD1.js";import"./index-5JSg7TKC.js";import"./index-D-sIGuKb.js";import"./useEventCallback-VFhsdas6.js";import"./SkeletonBar-C9zAaSl2.js";import"./LoadingCell-DN0DKMXJ.js";import"./ColumnConfigDialog-B55nyHVt.js";import"./DraggableList-DtigIKar.js";import"./search--hEGkwmt.js";import"./Input-qR3cLgNT.js";import"./useControlled-BTTM4wRl.js";import"./isEqual-BgqmPc7Z.js";import"./isObject-DKcO7n6l.js";import"./Button-BvmdrF_3.js";import"./ActionButton-C2gtk3D2.js";import"./Checkbox-xgTkB24d.js";import"./useValueChanged-Cxtk_s41.js";import"./CollapsiblePanel-BHoiEa8Y.js";import"./MultiColumnSortDialog-BzrGwEIf.js";import"./MenuTrigger-BxwoC8_m.js";import"./CompositeItem-C6n7AP2m.js";import"./ToolbarRootContext-DrMZ4IJS.js";import"./getDisabledMountTransitionStyles-DfQCDxjZ.js";import"./getPseudoElementBounds-CyipiQbQ.js";import"./chevron-down-KrczOSzf.js";import"./index-CFnWEuFo.js";import"./error-IFx71VBh.js";import"./BaseCbacBanner-BjCczzKS.js";import"./makeExternalStore-Cytkrsbu.js";import"./Tooltip-VzwiJ3X5.js";import"./PopoverPopup-Bz8q9iux.js";import"./toNumber-Ca0I2YME.js";import"./useOsdkClient-BJpIsQwT.js";import"./tick-BDn1wXHc.js";import"./DropdownField-DegXtX4D.js";import"./withOsdkMetrics-RqRZ8y66.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
