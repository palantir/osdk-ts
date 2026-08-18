import{j as i}from"./iframe-Bm2xIDK5.js";import{O as p}from"./object-table-CFUxdN_r.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DDJ2m_-D.js";import"./preload-helper-DjaAX_dd.js";import"./Table-4F6h1b3D.js";import"./index-CRCzPeKr.js";import"./Dialog-BZR8Cca8.js";import"./cross-CkbifLjz.js";import"./svgIconContainer-ZRcJnPU8.js";import"./useBaseUiId-BiVvMHjj.js";import"./InternalBackdrop-vr1BUsoL.js";import"./composite-CbVqY-fJ.js";import"./index-C4KdMwTz.js";import"./index-BPaiiW9-.js";import"./index-Bapk-oR-.js";import"./useEventCallback-RlciTi2w.js";import"./SkeletonBar-DfDeRVBU.js";import"./LoadingCell-DOimdUde.js";import"./ColumnConfigDialog-ChUa5nps.js";import"./DraggableList-C2BMGGxP.js";import"./search-BUI-KeZj.js";import"./Input-DAk1mrJi.js";import"./useControlled-ct5PUNgp.js";import"./Button-B6A5AFkI.js";import"./small-cross-PqOGkBCn.js";import"./ActionButton-C8EGQVdk.js";import"./Checkbox-YRFK2TzR.js";import"./useValueChanged-Cgt2JHZk.js";import"./CollapsiblePanel-DRsQEzKl.js";import"./MultiColumnSortDialog-BgpqHr6x.js";import"./MenuTrigger-Vj5KFc4x.js";import"./CompositeItem-C2KXSrkE.js";import"./ToolbarRootContext-BpHcU6MJ.js";import"./getDisabledMountTransitionStyles-DgA_rwoM.js";import"./getPseudoElementBounds-_BLc3f3_.js";import"./chevron-down-BWun0Vbz.js";import"./index-D54hbR-G.js";import"./error-DiQG4vMl.js";import"./BaseCbacBanner-swcONsxt.js";import"./makeExternalStore-B3tvKJjP.js";import"./Tooltip-CKLRVgEW.js";import"./PopoverPopup-DVgnt-uY.js";import"./debounce-BYjFGIK6.js";import"./useOsdkClient-Czd0V4OL.js";import"./tick-Dkou_i6S.js";import"./DropdownField-CsJ9gtlA.js";import"./isEqual-oln7N0D1.js";import"./withOsdkMetrics-YdolIAmM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
