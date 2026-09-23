import{j as i}from"./iframe-Cav9-PmA.js";import{O as p}from"./object-table-FfWcaoHB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BKPoq2bx.js";import"./preload-helper-C5qWD71s.js";import"./Table-Df9qMKmC.js";import"./index-CL4yhLt9.js";import"./Dialog-DrrXMeVl.js";import"./cross-Clu4CbjC.js";import"./svgIconContainer-DLGQs5zG.js";import"./useBaseUiId-FJrmMdaq.js";import"./InternalBackdrop-B6mZpXks.js";import"./composite-BhU6OEFZ.js";import"./index-B3WsbxUl.js";import"./index-CB0DImnr.js";import"./index-BK2mdNIa.js";import"./useEventCallback-DzYDdyjP.js";import"./SkeletonBar-DYSwTtQ7.js";import"./LoadingCell-DU86OTGa.js";import"./ColumnConfigDialog-B-Y2u4gB.js";import"./DraggableList-Cg_3j8gI.js";import"./search-LZGc9ZDj.js";import"./Input-BztqfZ4v.js";import"./useControlled-D_WTTjhN.js";import"./Button-lsqLjeDU.js";import"./small-cross-CLC5iKl2.js";import"./ActionButton-DmiOjJKj.js";import"./Checkbox-D_fY4w-O.js";import"./useValueChanged-LKsB26MY.js";import"./CollapsiblePanel-BlEs5D1u.js";import"./MultiColumnSortDialog-DDkUkQLe.js";import"./MenuTrigger-A8bLi2al.js";import"./CompositeItem-COO8IGaX.js";import"./ToolbarRootContext-BTcyHQC1.js";import"./getDisabledMountTransitionStyles-BN7EVmAM.js";import"./getPseudoElementBounds-Dlr5-0YW.js";import"./chevron-down-8Euui_dn.js";import"./index-CGDltp0P.js";import"./error-DdLyc_Py.js";import"./BaseCbacBanner-BtRv0qqS.js";import"./makeExternalStore-ZoA1Ll7J.js";import"./Tooltip-DXJLfO__.js";import"./PopoverPopup-Z0-leGqd.js";import"./debounce-Cq7GTWpW.js";import"./useOsdkClient-CyrMft84.js";import"./tick-UiUEGSqj.js";import"./DropdownField-B1NLU9Rd.js";import"./isEqual-D3uVPOsR.js";import"./withOsdkMetrics-Bmf3O0C1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
