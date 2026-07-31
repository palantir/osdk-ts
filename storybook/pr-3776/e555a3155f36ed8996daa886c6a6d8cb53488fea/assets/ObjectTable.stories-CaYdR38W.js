import{j as i}from"./iframe-B88mVS7j.js";import{O as p}from"./object-table-DNn1aq8t.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DwNVATy4.js";import"./preload-helper-Uh0wBuM7.js";import"./Table-C9amQtpi.js";import"./index-CHR_FX06.js";import"./Dialog-BqiW6w-x.js";import"./cross-Btk_mk5d.js";import"./svgIconContainer-DzGpDek4.js";import"./useBaseUiId-B57MJH3J.js";import"./InternalBackdrop-AjIOHMnw.js";import"./composite-CMcpDiPw.js";import"./index-CW2oecwS.js";import"./index-kGWOF-P0.js";import"./index-C3DNoegO.js";import"./useEventCallback-BOjwi_-M.js";import"./SkeletonBar-eH1Cw7eQ.js";import"./LoadingCell-n-qnNa3r.js";import"./ColumnConfigDialog-CUbQ3dGA.js";import"./DraggableList-CRSNi5y7.js";import"./search-SYzB7163.js";import"./Input-CF934myu.js";import"./useControlled-DYXt92Xk.js";import"./isEqual-DQCuYCo-.js";import"./isObject-DTjtTHQp.js";import"./Button-BdjBpoPj.js";import"./ActionButton-BvVwXU_I.js";import"./Checkbox-N1OTZTa9.js";import"./useValueChanged-Be0DaIrx.js";import"./CollapsiblePanel-BuNMefI-.js";import"./MultiColumnSortDialog-8UVxX1bE.js";import"./MenuTrigger-VK-rUh4l.js";import"./CompositeItem-B9Z5xrKg.js";import"./ToolbarRootContext-pC6zktu4.js";import"./getDisabledMountTransitionStyles-C2ONeXVG.js";import"./getPseudoElementBounds-BX0gj9Cd.js";import"./chevron-down-CgY_yXxx.js";import"./index-BEsZpRLK.js";import"./error-TTEpjfmJ.js";import"./BaseCbacBanner-DRiogddk.js";import"./makeExternalStore-Cu3F9xH0.js";import"./Tooltip-CNxWZpwW.js";import"./PopoverPopup-JIs4CT0a.js";import"./toNumber-CCDIu-4N.js";import"./useOsdkClient-ra61qNU0.js";import"./tick-D1eJMyLY.js";import"./DropdownField-B_ROMpHU.js";import"./withOsdkMetrics-D0OzWSyM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
