import{j as i}from"./iframe-BrodOdVa.js";import{O as p}from"./object-table-idZQuqXF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CJGshqC0.js";import"./preload-helper-BtXh37L-.js";import"./Table-C5250XeL.js";import"./index-nUEOyMBU.js";import"./Dialog-EOZh6rtT.js";import"./cross-BpGLYQ9Z.js";import"./svgIconContainer-B4AqVu0w.js";import"./useBaseUiId-BTSlrQJt.js";import"./InternalBackdrop-Bjvbe2IQ.js";import"./composite-B1APNlh4.js";import"./index-c-nuxmn_.js";import"./index-BvXrNTm7.js";import"./index-Btb8e17T.js";import"./useEventCallback-EWFzwAHE.js";import"./SkeletonBar--6NjKTds.js";import"./LoadingCell-CIxkpBsl.js";import"./ColumnConfigDialog-CIOUoVyJ.js";import"./DraggableList-CsbqB8Uy.js";import"./search-DqsOFw0-.js";import"./Input-iiNc2naG.js";import"./useControlled-Cs7ltDfx.js";import"./small-cross-Br4CldP7.js";import"./Button-TfoAXQA0.js";import"./ActionButton-6EKtVdWc.js";import"./Checkbox-8q2mtsln.js";import"./useValueChanged-Df2xctWW.js";import"./CollapsiblePanel-D69D5MUo.js";import"./MultiColumnSortDialog-JqfUC0Kd.js";import"./MenuTrigger-C93NcQUY.js";import"./CompositeItem-BiidShqS.js";import"./ToolbarRootContext-Ch6E_QUO.js";import"./getDisabledMountTransitionStyles-BVIpZ_My.js";import"./getPseudoElementBounds-CZj0yuu2.js";import"./chevron-down-CncSp1oW.js";import"./index-CVc025-m.js";import"./error-DFX2T5hJ.js";import"./BaseCbacBanner-CYteqHtp.js";import"./makeExternalStore-C91wvf2v.js";import"./Tooltip-CNNDCbNt.js";import"./PopoverPopup-BEwNTt9o.js";import"./Combobox-De7QdF7N.js";import"./useOsdkClient-DDpROb7V.js";import"./tick-DNasZ5Uq.js";import"./DropdownField-P2AbbCFB.js";import"./withOsdkMetrics-CdZtg9n6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
