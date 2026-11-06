import{j as i}from"./iframe-FZKVnNVk.js";import{O as p}from"./object-table-loXsL1bM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BGCTuCxO.js";import"./preload-helper-3dwBIJCj.js";import"./Table-hKbrjj3q.js";import"./index-Dde_nhTq.js";import"./Dialog-nns0O2qZ.js";import"./cross-Dm4ybRp6.js";import"./svgIconContainer-XHaqdbDx.js";import"./useBaseUiId-CHWJmPEK.js";import"./InternalBackdrop-BqJGJ_zZ.js";import"./composite-pRARdUSn.js";import"./index-CF9ImBhb.js";import"./index-DcCADMqh.js";import"./index-CkeIfmFs.js";import"./useEventCallback-zjPLn5wF.js";import"./SkeletonBar-BGliQaQA.js";import"./LoadingCell-93UchtYC.js";import"./ColumnConfigDialog-Cu8cIVL2.js";import"./DraggableList-BGvhm88l.js";import"./search-UOw594pj.js";import"./Input-CZghJbmx.js";import"./useControlled-z91UpuYz.js";import"./Button-CYIzntRV.js";import"./small-cross-NJGDyAQR.js";import"./ActionButton-CdreXPwS.js";import"./Checkbox-BXapXcMI.js";import"./useValueChanged-C5VkOvOI.js";import"./CollapsiblePanel-CmKPWPla.js";import"./MultiColumnSortDialog-BvfowQRQ.js";import"./MenuTrigger-Cq7tkS0o.js";import"./CompositeItem-DwzK3_pD.js";import"./ToolbarRootContext-DURRKwiG.js";import"./getDisabledMountTransitionStyles-LA4j7wgS.js";import"./getPseudoElementBounds-DzPv2Lpp.js";import"./chevron-down-D0c3SzT7.js";import"./index-CO1rso4Q.js";import"./error-ClLL5bQm.js";import"./BaseCbacBanner-DnKk2Fz0.js";import"./makeExternalStore-BWIKD2My.js";import"./Tooltip-CNa5ZfhK.js";import"./isObject-DSmxuai9.js";import"./debounce-BBy5KbHR.js";import"./useOsdkClient-DZXuGuSk.js";import"./tick-BfEHlf8d.js";import"./DropdownField-D0HrafpY.js";import"./isEqual-CFjxyXGr.js";import"./_baseIsEqual-CEa3UOU3.js";import"./withOsdkMetrics-BeTzvhLK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
