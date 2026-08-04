import{j as i}from"./iframe-BuzOoOHv.js";import{O as p}from"./object-table-CvbZDzOi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-xzL18Tqw.js";import"./preload-helper-C765uWVj.js";import"./Table-B8zOSGXI.js";import"./index-_6ysS2yV.js";import"./Dialog-C2Q4iKQk.js";import"./cross-BV3IGYpC.js";import"./svgIconContainer-SORA5KtX.js";import"./useBaseUiId-DqalFV8v.js";import"./InternalBackdrop-BtuRLE2O.js";import"./composite-BIVAp0zR.js";import"./index-DCrRq_5A.js";import"./index-hW3Ke2NY.js";import"./index-jehAm6Kk.js";import"./useEventCallback-bOVx3wI8.js";import"./SkeletonBar-O0oSg_B7.js";import"./LoadingCell-CRfMmV_r.js";import"./ColumnConfigDialog-BkRlh8kU.js";import"./DraggableList-tTG2ePWi.js";import"./search-DqLYnKdd.js";import"./Input-BO7emUuh.js";import"./useControlled-uHrHxuUf.js";import"./isEqual-3xf8jPCh.js";import"./isObject-Bvw6a01i.js";import"./Button-D1sJFP36.js";import"./ActionButton-ThhIHAJM.js";import"./Checkbox-BUs9gT7T.js";import"./useValueChanged-Emqhaa8x.js";import"./CollapsiblePanel-BnQCoUWm.js";import"./MultiColumnSortDialog-9Fqkz69M.js";import"./MenuTrigger-DsVfygqB.js";import"./CompositeItem-TlDrHws6.js";import"./ToolbarRootContext-jg392USi.js";import"./getDisabledMountTransitionStyles-BvPtMGe8.js";import"./getPseudoElementBounds-BUW3HczB.js";import"./chevron-down-CTN4fjxa.js";import"./index-9Om4LNln.js";import"./error-h4XEWJuh.js";import"./BaseCbacBanner-BuJZW5To.js";import"./makeExternalStore-CsXJf4mV.js";import"./Tooltip-BPMSggV3.js";import"./PopoverPopup-DwCdko6-.js";import"./toNumber-C0gEFUc5.js";import"./useOsdkClient-BVdLtTfj.js";import"./tick-AKA0MUCM.js";import"./DropdownField-CiJb6Zx4.js";import"./withOsdkMetrics-BAnTF50z.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
