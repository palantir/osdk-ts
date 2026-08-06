import{j as i}from"./iframe-Bm5jzr8T.js";import{O as p}from"./object-table-BT3WJKf5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dl_px0qU.js";import"./preload-helper-CSZnNglA.js";import"./Table-BwCey59J.js";import"./index-ClQUzYG2.js";import"./Dialog-CEW496P3.js";import"./cross-DVFMZvVA.js";import"./svgIconContainer-R--xU0hg.js";import"./useBaseUiId-C3nowbxu.js";import"./InternalBackdrop-DZ3hqVez.js";import"./composite-CWDFfLuK.js";import"./index-DLRkWHMK.js";import"./index-BcWTji-b.js";import"./index-BEoHxM62.js";import"./useEventCallback-CI7uLU8f.js";import"./SkeletonBar-CSxJEasa.js";import"./LoadingCell-DcLLGo5Q.js";import"./ColumnConfigDialog-Eiwl-hwJ.js";import"./DraggableList-Bmfpw-zN.js";import"./search-CqGLs9ZZ.js";import"./Input-CDKdLXlP.js";import"./useControlled-BLatlVO6.js";import"./isEqual-DXaKKJIX.js";import"./isObject-DztzetiJ.js";import"./Button-Cety1YHR.js";import"./ActionButton-bTP_UK65.js";import"./Checkbox-BkVz2iLv.js";import"./useValueChanged-DHWbbgvf.js";import"./CollapsiblePanel-ConGGTZK.js";import"./MultiColumnSortDialog-BsXGmWAr.js";import"./MenuTrigger-BbNMOgKb.js";import"./CompositeItem-3MKWjM1o.js";import"./ToolbarRootContext-cG30qRz2.js";import"./getDisabledMountTransitionStyles-DgnGFD7A.js";import"./getPseudoElementBounds-CbPvxVlD.js";import"./chevron-down-C6hvYjb1.js";import"./index-DHhyRUWy.js";import"./error-Bhi3wxY-.js";import"./BaseCbacBanner-DqM_wZYq.js";import"./makeExternalStore-BMDNa_EK.js";import"./Tooltip-uspGCdfX.js";import"./PopoverPopup-fq6DR5Ok.js";import"./toNumber-BbWIN4JV.js";import"./useOsdkClient-CCL0FN2l.js";import"./tick-DksdaIdb.js";import"./DropdownField-o4Ba4JuE.js";import"./withOsdkMetrics-CwVNpXHj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
