import{j as i}from"./iframe-BTFFJnjn.js";import{O as p}from"./object-table-gj9Lc75C.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CbVv-pjP.js";import"./preload-helper-CSZsPkfX.js";import"./Table-yVCzvX5z.js";import"./index-C_Z722LV.js";import"./Dialog-DzBBRwDf.js";import"./cross-LRAZ9qps.js";import"./svgIconContainer-gp9RWo3r.js";import"./useBaseUiId-DHyYX2RX.js";import"./InternalBackdrop-BHLBjXqJ.js";import"./composite-DBRlpOlr.js";import"./index-B4NnbGlh.js";import"./index-CrQcuE9G.js";import"./index-0gaZ0R5v.js";import"./useEventCallback-D2JKsoPj.js";import"./SkeletonBar-CyQFjxNz.js";import"./LoadingCell-Sg18K7xn.js";import"./ColumnConfigDialog-CYv9Vbqr.js";import"./DraggableList-D-9GgOT5.js";import"./search-DOiBQX63.js";import"./Input-D5tlOD_j.js";import"./useControlled-DbgXwRAA.js";import"./Button-XND01Fh-.js";import"./small-cross-DcEGFbkq.js";import"./ActionButton-BOqgyglZ.js";import"./Checkbox-B0yfJxSM.js";import"./useValueChanged-BrxBLzAH.js";import"./CollapsiblePanel--hZtn4S3.js";import"./MultiColumnSortDialog-Uxi7YfUX.js";import"./MenuTrigger-Ff7CWCoo.js";import"./CompositeItem-0772M-C_.js";import"./ToolbarRootContext-BsMzvLUB.js";import"./getDisabledMountTransitionStyles-DPkci45d.js";import"./getPseudoElementBounds-C_NyFnLm.js";import"./chevron-down-C34taKQb.js";import"./index-Dw0-j0VX.js";import"./error-D1AJOnUs.js";import"./BaseCbacBanner-DUePnqQ9.js";import"./makeExternalStore-Dk37SoTO.js";import"./Tooltip-D6bixjsm.js";import"./PopoverPopup-Cc0ymlLC.js";import"./debounce-COoRFcah.js";import"./useOsdkClient-6aibAJDm.js";import"./tick-BwSmQKfq.js";import"./DropdownField-CINIO7u-.js";import"./isEqual-B-bsFdvN.js";import"./withOsdkMetrics-B7f6_6X-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
