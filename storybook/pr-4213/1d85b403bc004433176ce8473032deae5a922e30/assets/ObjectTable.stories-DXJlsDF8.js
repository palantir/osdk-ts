import{j as i}from"./iframe-BfxMX6cT.js";import{O as p}from"./object-table-Dy7UyFzj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CO-zZG7_.js";import"./preload-helper-BPDao22J.js";import"./Table-C92nfJIb.js";import"./index-D5QdHG6c.js";import"./Dialog-BjV9jDBU.js";import"./cross-BQzi9cCY.js";import"./svgIconContainer-B11i6ssl.js";import"./useBaseUiId-Diys5Rd8.js";import"./InternalBackdrop-CzfUVdiw.js";import"./composite-CX7YV8L_.js";import"./index-CgOKnRwH.js";import"./index-DGcqs1ai.js";import"./index-CxMUUWdA.js";import"./useEventCallback-CBWmqZQL.js";import"./SkeletonBar-CcSf93cH.js";import"./LoadingCell-lQ3kMXKt.js";import"./ColumnConfigDialog-BmCXnw3W.js";import"./DraggableList-tDSTIq02.js";import"./search-D1ZDVnFF.js";import"./Input-C-zjcWJd.js";import"./useControlled-AEJbE5Jc.js";import"./Button-4wSek2R3.js";import"./small-cross-DukaMdQz.js";import"./ActionButton-DDdXpm0C.js";import"./Checkbox-D8LsxsuS.js";import"./useValueChanged-MAwDQy-M.js";import"./CollapsiblePanel-DC0pzIEf.js";import"./MultiColumnSortDialog-C39kjkmj.js";import"./MenuTrigger-6JM3TOuY.js";import"./CompositeItem-BPbSYDgv.js";import"./ToolbarRootContext-DYeN6dWB.js";import"./getDisabledMountTransitionStyles-CUDtZPwG.js";import"./getPseudoElementBounds-CDkHDgNY.js";import"./chevron-down-3tdgVjjI.js";import"./index-DBgFz0Qc.js";import"./error-Cw0OZsfU.js";import"./BaseCbacBanner-qin0DxGa.js";import"./makeExternalStore-Cp6FC4H6.js";import"./Tooltip-CALVvbNy.js";import"./PopoverPopup-BTJRWa40.js";import"./debounce-BMvGLHn1.js";import"./useOsdkClient-B0mdKYcq.js";import"./tick-BZki_9Xu.js";import"./DropdownField-D9jSS7VG.js";import"./isEqual-CiQuOF5j.js";import"./withOsdkMetrics-DLVxiL_Q.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
