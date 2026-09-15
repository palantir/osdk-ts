import{j as i}from"./iframe-Ds1oJ6aB.js";import{O as p}from"./object-table-DxGk5C4S.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CvMyREqF.js";import"./preload-helper-BuU6EXxB.js";import"./Table-B9BzzCYb.js";import"./index-DV-RsCBD.js";import"./Dialog-CtyGPeOn.js";import"./cross-GX9DzQOW.js";import"./svgIconContainer-DhoJ1wKf.js";import"./useBaseUiId-SveB9MiJ.js";import"./InternalBackdrop-dHXXhMSx.js";import"./composite-B685C7pj.js";import"./index-Z-0SkI97.js";import"./index-Dg7JsOD2.js";import"./index-DjBs4z29.js";import"./useEventCallback-BIuUY0VI.js";import"./SkeletonBar-CgiMkEwi.js";import"./LoadingCell-Cu7oZNVj.js";import"./ColumnConfigDialog-qhy8ZuqX.js";import"./DraggableList-CC_UvAAX.js";import"./search-C9RUzGD8.js";import"./Input-DCigff7H.js";import"./useControlled-Bb3j5PDR.js";import"./Button-DEZznyRx.js";import"./small-cross-OSqOWbbs.js";import"./ActionButton-y1-kR7HQ.js";import"./Checkbox-04oMgZo9.js";import"./useValueChanged-DiKNib74.js";import"./CollapsiblePanel-DJPu7lg7.js";import"./MultiColumnSortDialog-BLl7b0AQ.js";import"./MenuTrigger-SsRAk4WD.js";import"./CompositeItem-DRYBX4C7.js";import"./ToolbarRootContext-D5DhHef8.js";import"./getDisabledMountTransitionStyles-M6DMXfnH.js";import"./getPseudoElementBounds-BevdPYrx.js";import"./chevron-down-BTaheqba.js";import"./index-DBvZrrqp.js";import"./error-Cpa8ixp-.js";import"./BaseCbacBanner-D37f3xf5.js";import"./makeExternalStore-Bpmh1YoV.js";import"./Tooltip-CiCS2vte.js";import"./PopoverPopup-BW8M19fp.js";import"./debounce-CaEJ8DE5.js";import"./useOsdkClient-Dx_YLbK3.js";import"./tick-4HEv4TzV.js";import"./DropdownField--RBhVTBF.js";import"./isEqual-B6VYb55l.js";import"./withOsdkMetrics-BWv1tGJm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
