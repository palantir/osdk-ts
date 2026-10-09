import{j as i}from"./iframe-gl1D0cYu.js";import{O as p}from"./object-table-DWlqOrB0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-tNgwJn7U.js";import"./preload-helper-DqgH6sT8.js";import"./Table-05mb1aST.js";import"./index-D5PLyZrU.js";import"./Dialog-YNb8BJSN.js";import"./cross-nvwlJ43b.js";import"./svgIconContainer-D2ylg-hx.js";import"./useBaseUiId-DaNXLH9o.js";import"./InternalBackdrop-B2oQrtyL.js";import"./composite-mmowW-5S.js";import"./index-DZJG8XPS.js";import"./index-DYOboT0w.js";import"./index-DpfgomRZ.js";import"./useEventCallback-BMDTzt3U.js";import"./SkeletonBar-Djy6KVIi.js";import"./LoadingCell-BahYtaDB.js";import"./ColumnConfigDialog-Da-NI91w.js";import"./DraggableList-BT0QdQr8.js";import"./search-DuJOx_mq.js";import"./Input-DikxtY8U.js";import"./useControlled-D-vu1Iu-.js";import"./Button-Dyc2i6Ov.js";import"./small-cross-BShBRTCB.js";import"./ActionButton-CTRf1gwO.js";import"./Checkbox-1LqBOyyG.js";import"./useValueChanged-B5BKkZsH.js";import"./CollapsiblePanel-BQtLzhJx.js";import"./MultiColumnSortDialog-BlgyqvG6.js";import"./MenuTrigger-DaW5jwCf.js";import"./CompositeItem-hGM9YKcr.js";import"./ToolbarRootContext-DUK6v5QM.js";import"./getDisabledMountTransitionStyles-CEC9IPnY.js";import"./getPseudoElementBounds-1Yev2lnF.js";import"./chevron-down-B--bqcM3.js";import"./index-Cevn-2DA.js";import"./error-CF31ifZ8.js";import"./BaseCbacBanner-Bp4FPOAe.js";import"./makeExternalStore-mCeZ-qAv.js";import"./Tooltip-TuG8zUYZ.js";import"./PopoverPopup-OUHi2kGW.js";import"./debounce-C5VfxwkA.js";import"./useOsdkClient-BBR-XdUj.js";import"./tick-CMBEryyP.js";import"./DropdownField-CUCj8DNZ.js";import"./isEqual-VJmxrJq2.js";import"./withOsdkMetrics-qXzvdtsT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
