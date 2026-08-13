import{j as i}from"./iframe-CyuT7sA8.js";import{O as p}from"./object-table-Aj5fVVVg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BFX58Oc0.js";import"./preload-helper-96BDXHaD.js";import"./Table-Du0o3kik.js";import"./index-C_6jq-CI.js";import"./Dialog-Cv_z4LDg.js";import"./cross-C5JPqzj3.js";import"./svgIconContainer-CaGNr8BU.js";import"./useBaseUiId-B5H6aoGe.js";import"./InternalBackdrop-CURFRzbw.js";import"./composite-CZN4L-Em.js";import"./index-C900sVPn.js";import"./index-BUf8UOrQ.js";import"./index-BACbzGM8.js";import"./useEventCallback-DmUbzO5M.js";import"./SkeletonBar-DEZz7Qea.js";import"./LoadingCell-BjpJ1NOX.js";import"./ColumnConfigDialog-2mIqR4x3.js";import"./DraggableList-D6Hkxnmk.js";import"./search-CKTNg7RE.js";import"./Input-KCuhgloF.js";import"./useControlled-CNQ4xPOD.js";import"./isEqual-BynPMucz.js";import"./isObject-C3_lsIkh.js";import"./Button-DEJD33aj.js";import"./ActionButton-DbRmvcNY.js";import"./Checkbox-BVUYdzSe.js";import"./useValueChanged-DatrXVPa.js";import"./CollapsiblePanel-CSABs0sQ.js";import"./MultiColumnSortDialog-DkS8JuZG.js";import"./MenuTrigger-BXMGENMv.js";import"./CompositeItem-DgOyYKdv.js";import"./ToolbarRootContext-D-yYDS8o.js";import"./getDisabledMountTransitionStyles-DiozD-9r.js";import"./getPseudoElementBounds-X2hHhho1.js";import"./chevron-down-DH6c9NVt.js";import"./index-DhRjIIVJ.js";import"./error-wRnolQK2.js";import"./BaseCbacBanner-Dcnep55n.js";import"./makeExternalStore-vHKDZBeW.js";import"./Tooltip-7QjXpwTd.js";import"./PopoverPopup-DsPbQxq-.js";import"./debounce-WsUiF9L6.js";import"./useOsdkClient-DfOiBBAH.js";import"./tick-DAlwGaLf.js";import"./DropdownField-CjJ4hYdn.js";import"./withOsdkMetrics-dgGlVNih.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
